# jq plugin

[jq](https://jqcli.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add jq "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/jq/plugin.toml" --global
proto install jq
```

### Per-project install

```shell
proto plugin add jq "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/jq/plugin.toml"
proto pin jq latest --resolve
```
