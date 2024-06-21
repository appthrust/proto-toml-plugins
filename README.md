# Proto Plugins 

## Contributing

### How to add a new plugin step by step

1. Generate a `plugin.toml` following the manual: [How to Create a TOML for moonrepo's proto tools in 30 Seconds
   ](https://github.com/moonrepo/moon/discussions/1505)
2. Write a `plugin.test.ts` for the plugin
3. Write a `README.md` for the plugin
4. Run test locally by `moon :test`
2. Make a PR and wait for the CI to pass
3. Merge the PR

### How to send a PR to the official proto repo to register the plugin

Run the command below and follow the instructions:

```shell
yarn tsx prepare-pull-request.ts
```
