import { run } from "../testkit.js";

run({
	name: "dotenv-linter",
	afterInstall: async ($) => {
		await $`dotenv-linter --version`;
	},
});
