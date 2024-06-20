import { run } from "../testkit.js";

run({
	name: "rye",
	afterInstall: async ($) => {
		await $`rye --version`;
	},
});
