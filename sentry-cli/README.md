# GitHub CLI plugin

[Sentry CLI](https://github.com/getsentry/sentry-cli) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add sentry-cli "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/sentry-cli/plugin.toml" --global
proto install sentry-cli
```

### Per-project install

```shell
proto plugin add gh "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/sentry-cli/plugin.toml"
proto pin sentry-cli latest --resolve
```
