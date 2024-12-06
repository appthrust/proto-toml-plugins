import { run } from "../testkit.js";

run({
	name: "trivy",
	afterInstall: async ($) => {
		await $`trivy --version`;
	},
});
