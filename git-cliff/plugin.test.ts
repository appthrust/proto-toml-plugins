import { run } from "../testkit.js";

run({
	name: "git-cliff",
	afterInstall: async ($) => {
		await $`git-cliff --version`;
	},
});
