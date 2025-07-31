import { run } from "../testkit.js";

run({
	name: "cog",
	afterInstall: async ($) => {
		await $`cog --version`;
	},
});
