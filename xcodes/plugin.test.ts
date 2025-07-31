import { run } from "../testkit.js";

run({
	name: "xcodes",
	afterInstall: async ($) => {
		await $`xcodes --version`;
	},
});
