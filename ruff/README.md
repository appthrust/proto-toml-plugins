# OpenTofu plugin

[Ruff](https://docs.astral.sh/ruff/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add ruff "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/ruff/plugin.toml" --global
proto install ruff
```

### Per-project install

```shell
proto plugin add ruff "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/ruff/plugin.toml"
proto pin ruff latest --resolve
```
