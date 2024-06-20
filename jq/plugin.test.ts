import { run } from "../testkit.js";

run({
	name: "jq",
	afterInstall: async ($) => {
		await $`jq --version`;
	},
});
