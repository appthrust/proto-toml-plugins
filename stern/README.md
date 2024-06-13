# stern plugin

[stern](https://sterncli.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add stern "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/stern/plugin.toml" --global
proto install stern
```

### Per-project install

```shell
proto plugin add stern "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/stern/plugin.toml"
proto pin stern latest --resolve
```
