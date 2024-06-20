import { run } from "../testkit.js";

run({
	name: "k3d",
	afterInstall: async ($) => {
		await $`k3d --version`;
	},
});
