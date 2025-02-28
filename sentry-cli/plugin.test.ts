import { run } from "../testkit.js";

run({
  name: "sentry-cli",
  afterInstall: async ($) => {
    await $`sentry-cli -V`;
  },
});
