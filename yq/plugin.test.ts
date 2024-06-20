import { run } from "../testkit.js";

run({
	name: "yq",
	afterInstall: async ($) => {
		await $`yq --version`;
	},
});
