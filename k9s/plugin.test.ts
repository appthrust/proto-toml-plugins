import { run } from "../testkit.js";

run({
	name: "k9s",
	afterInstall: async ($) => {
		await $`k9s --version`;
	},
});
