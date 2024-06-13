# argo plugin

[argo](https://argocli.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add argo "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/argo/plugin.toml" --global
proto install argo
```

### Per-project install

```shell
proto plugin add argo "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/argo/plugin.toml"
proto pin argo latest --resolve
```
