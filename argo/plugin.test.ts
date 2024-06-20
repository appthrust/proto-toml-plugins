import { run } from "../testkit.js";

run({
	name: "argo",
	afterInstall: async ($) => {
		await $`argo version`;
	},
});
