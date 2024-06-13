# jnv plugin

[jnv](https://github.com/ynqa/jnv) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add jnv "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/jnv/plugin.toml" --global
proto install jnv
```

### Per-project install

```shell
proto plugin add jnv "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/jnv/plugin.toml"
proto pin jnv latest --resolve
```
