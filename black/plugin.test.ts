import { run } from "../testkit.js";

run({
	name: "black",
	afterInstall: async ($) => {
		await $`black --version`;
	},
});
