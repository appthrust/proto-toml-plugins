# cocogitto plugin

[cocogitto](https://docs.cocogitto.io/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add cog "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/cog/plugin.toml" --global
proto install cog
```

### Per-project install

```shell
proto plugin add cog "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/cog/plugin.toml"
proto pin cog latest --resolve
```
