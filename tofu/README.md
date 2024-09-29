# OpenTofu plugin

[OpenTofu](https://opentofu.org/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add tofu "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/tofu/plugin.toml" --global
proto install tofu
```

### Per-project install

```shell
proto plugin add tofu "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/tofu/plugin.toml"
proto pin tofu latest --resolve
```
