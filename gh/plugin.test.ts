import { run } from "../testkit.js";

run({
	name: "gh",
	afterInstall: async ($) => {
		await $`gh --version`;
	},
});
