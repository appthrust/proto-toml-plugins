import { run } from "../testkit.js";

run({
  name: "direnv",
  afterInstall: async ($) => {
    await $`direnv version`;
  },
});
