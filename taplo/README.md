# Taplo plugin

[Taplo](https://taplo.tamasfe.dev/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add taplo "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/taplo/plugin.toml" --global
proto install taplo
```

### Per-project install

```shell
proto plugin add taplo "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/taplo/plugin.toml"
proto pin taplo latest --resolve
```
