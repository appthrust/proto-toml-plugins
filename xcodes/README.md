# xcodes plugin

[xcodes](https://github.com/XcodesOrg/xcodes) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add xcodes "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/xcodes/plugin.toml" --global
proto install xcodes
```

### Per-project install

```shell
proto plugin add xcodes "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/xcodes/plugin.toml"
proto pin xcodes latest --resolve
```
