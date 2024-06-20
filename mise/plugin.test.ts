import { run } from "../testkit.js";

run({
	name: "mise",
	afterInstall: async ($) => {
		await $`mise --version`;
	},
});
