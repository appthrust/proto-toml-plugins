# k3d plugin

[k3d](https://github.com/k3d-io/k3d) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add k3d "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k3d/plugin.toml" --global
proto install k3d
```

### Per-project install

```shell
proto plugin add k3d "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/k3d/plugin.toml"
proto pin k3d latest --resolve
```

