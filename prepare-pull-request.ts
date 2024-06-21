import { readFile, stat, writeFile } from "node:fs/promises";
import toml from "toml";
import { $, question } from "zx";
import { cd } from "zx/core";

$.verbose = true;

const workspaceRoot = import.meta.dirname;
const cloneDir = "__official-repo";
const clonePath = `${workspaceRoot}/${cloneDir}`;

async function main(): Promise<void> {
	if (await ourRepoAlreadyCloned()) {
		console.warn("Our repo already cloned, skip.");
	} else {
		await cloneOurRepo();
		console.info("Our repo cloned.");
	}
	const name = await question("Enter plugin name which you want to prepare PR: ");
	if (!(await isKnownPlugin(name))) {
		console.error(`Plugin '${name}' not found in our repo. Please check the name and try again.`);
		return;
	}
	await makeChangeOfficialRepo(name);
}

async function ourRepoAlreadyCloned(): Promise<boolean> {
	try {
		await stat(clonePath);
		return true;
	} catch {
		return false;
	}
}

async function cloneOurRepo(): Promise<void> {
	await $`gh repo sync appthrust/proto -b master`;
	await $`gh repo clone ${ourRepoUrl()} ${clonePath}`;
}

function ourRepoUrl(): string {
	return process.env["OUR_REPO_URL"] || "git@github.com:appthrust/proto.git";
}

async function isKnownPlugin(name: string): Promise<boolean> {
	return isDir(`${workspaceRoot}/${name}`);
}

async function isDir(path: string): Promise<boolean> {
	try {
		const stats = await stat(path);
		return stats.isDirectory();
	} catch {
		return false;
	}
}

async function makeChangeOfficialRepo(name: string): Promise<void> {
	const thirdPartyJsonPath = `${clonePath}/registry/data/third-party.json`;
	const thirdPartyJsonContent = await readFile(thirdPartyJsonPath, { encoding: "utf-8" });
	const thirdPartyJson = JSON.parse(thirdPartyJsonContent);
	const pluginInfo = await readPluginInfo(name);
	console.info(`fetching plugin repo info for ${name}...`);
	const pluginRepo = await fetchPluginRepo(pluginInfo.resolve["git-url"]);
	const pluginEntry = buildTemplate({
		id: name,
		name: pluginInfo.name,
		bins: [name],
		description: pluginRepo.description,
		homepageUrl: pluginRepo.homepage,
	});
	thirdPartyJson.plugins.push(pluginEntry);
	cd(clonePath);
	await writeFile(thirdPartyJsonPath, JSON.stringify(thirdPartyJson, null, 2));
	await $`just gen`;
	await $`git checkout -b add-${name}`;
	await $`git add ${thirdPartyJsonPath}`;
	console.log("generated info info: ", pluginEntry);
	console.log(`Please check the below:

- Are the links correct?
- Is the description correct?
- Is the bins correct?

Open the file file://${thirdPartyJsonPath} and check the changes.

You can edit the file directly if you want to make changes. Then don't forget to run 'just gen' to update the toml files.
`);
	while ((await question("Enter 'commit' to make a commit: ")) !== "commit") {
		console.warn("Please enter 'commit' to make a commit.");
	}
	await $`git commit -m "Add ${name} plugin"`;
	await $`git push -u origin add-${name}`;
	console.log(`
Please create a pull request by running the below command:

\`\`\`
cd ${cloneDir}
gh pr create
\`\`\`

After the PR is created, please remove ${cloneDir} directory.

\`\`\`
rm -rf ${cloneDir}
\`\`\`

`);
}

async function readPluginInfo(name: string): Promise<PluginInfo> {
	const content = await readFile(`${workspaceRoot}/${name}/plugin.toml`, { encoding: "utf-8" });
	return toml.parse(content) as PluginInfo;
}

type PluginInfo = {
	name: string;
	type: string;
	resolve: {
		"git-url": string;
	};
};

async function fetchPluginRepo(url: string): Promise<{
	homepage: string;
	description: string;
}> {
	const apiUrl = url.replace("https://github.com/", "https://api.github.com/repos/");
	console.debug(`fetching ${apiUrl}...`);
	const response = await fetch(apiUrl);
	const json = (await response.json()) as { homepage?: string; description?: string };
	return {
		homepage: json.homepage || url,
		description: json.description ?? (await question("Enter short description for the plugin: ")),
	};
}

function buildTemplate({
	id,
	name,
	description,
	homepageUrl,
	bins,
}: { id: string; name: string; description: string; homepageUrl: string; bins: string[] }) /* infer */ {
	return {
		id,
		locator: `https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/${id}/plugin.toml`,
		format: "toml",
		name,
		description,
		author: "appthrust",
		homepageUrl,
		repositoryUrl: `https://github.com/appthrust/proto-toml-plugins/tree/main/${id}`,
		bins,
	};
}

await main();
