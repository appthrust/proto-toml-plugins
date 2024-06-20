import { run } from "../testkit.js";

run({
	name: "fzf",
	afterInstall: async ($) => {
		await $`fzf --version`;
	},
});
