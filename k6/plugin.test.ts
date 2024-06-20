import { run } from "../testkit.js";

run({
	name: "k6",
	afterInstall: async ($) => {
		await $`k6 --version`;
	},
});
