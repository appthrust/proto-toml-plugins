import { run } from "../testkit.js";

run({
	name: "argocd",
	afterInstall: async ($) => {
		await $`argocd version --client`;
	},
});
