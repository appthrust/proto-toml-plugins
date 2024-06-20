import { run } from "../testkit.js";

run({
	name: "sccache",
	afterInstall: async ($) => {
		await $`sccache --version`;
	},
});
