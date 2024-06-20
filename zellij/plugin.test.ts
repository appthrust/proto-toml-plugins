import { run } from "../testkit.js";

run({
	name: "zellij",
	afterInstall: async ($) => {
		await $`zellij --version`;
	},
});
