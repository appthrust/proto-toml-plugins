import { run } from "../testkit.js";

run({
	name: "ruff",
	afterInstall: async ($) => {
		await $`ruff --version`;
	},
});
