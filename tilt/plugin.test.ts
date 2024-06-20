import { run } from "../testkit.js";

run({
	name: "tilt",
	afterInstall: async ($) => {
		await $`tilt version`;
	},
});
