import { run } from "../testkit.js";

run({
	name: "gum",
	afterInstall: async ($) => {
		await $`gum -v`;
	},
});
