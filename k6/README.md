# k6 plugin

[k6](https://k6.io/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add k6 "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k6/plugin.toml" --global
proto install k6
```

### Per-project install

```shell
proto plugin add k6 "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k6/plugin.toml"
proto pin k6 latest --resolve
```
