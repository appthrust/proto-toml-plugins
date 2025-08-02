import { run } from "../testkit.js";

run({
	name: "taplo",
	afterInstall: async ($) => {
		await $`taplo --version`;
	},
});
