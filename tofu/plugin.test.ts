import { run } from "../testkit.js";

run({
	name: "tofu",
	afterInstall: async ($) => {
		await $`tofu --version`;
	},
});
