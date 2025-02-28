import { run } from "../testkit.js";

run({
	name: "marp",
	afterInstall: async ($) => {
		await $`marp --version`;
	},
});
