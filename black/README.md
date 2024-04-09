# black plugin

[black](https://black.readthedocs.io/en/stable/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add black "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/black/plugin.toml" --global
proto install black
```

### Per-project install

```shell
proto plugin add black "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/black/plugin.toml"
proto pin black latest --resolve
```

