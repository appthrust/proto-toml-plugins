import { run } from "../testkit.js";

run({
	name: "cue",
	afterInstall: async ($) => {
		await $`cue version`;
	},
});
