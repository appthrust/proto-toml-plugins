import { run } from "../testkit.js";

run({
	name: "jnv",
	afterInstall: async ($) => {
		await $`jnv --version`;
	},
});
