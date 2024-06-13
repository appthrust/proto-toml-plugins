# mise plugin

[mise](https://mise.jdx.dev/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add mise "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/mise/plugin.toml" --global
proto install mise
```

### Per-project install

```shell
proto plugin add mise "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/mise/plugin.toml"
proto pin mise latest --resolve
```
