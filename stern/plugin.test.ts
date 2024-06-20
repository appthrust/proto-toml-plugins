import { run } from "../testkit.js";

run({
	name: "stern",
	afterInstall: async ($) => {
		await $`stern --version`;
	},
});
