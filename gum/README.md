# gum plugin

[gum](https://github.com/charmbracelet/gum) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add gum "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/gum/plugin.toml" --global
proto install gum
```

### Per-project install

```shell
proto plugin add gum "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/gum/plugin.toml"
proto pin gum latest --resolve
```
