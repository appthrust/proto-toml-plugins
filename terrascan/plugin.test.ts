import { run } from "../testkit.js";

run({
	name: "terrascan",
	afterInstall: async ($) => {
		await $`terrascan version`;
	},
});
