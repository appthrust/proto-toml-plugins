# marp plugin

[marp](https://marp.app/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add marp "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/marp/plugin.toml" --global
proto install marp
```

### Per-project install

```shell
proto plugin add k9s "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/marp/plugin.toml"
proto pin marp latest --resolve
```
