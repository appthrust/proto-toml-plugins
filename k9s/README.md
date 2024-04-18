# k9s plugin

[k9s](https://k9scli.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add k9s "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k9s/plugin.toml" --global
proto install k9s
```

### Per-project install

```shell
proto plugin add k9s "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k9s/plugin.toml"
proto pin k9s latest --resolve
```
