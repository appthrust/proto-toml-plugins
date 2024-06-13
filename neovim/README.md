# neovim plugin

[neovim](https://neovimcli.io) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add neovim "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/neovim/plugin.toml" --global
proto install neovim
```

### Per-project install

```shell
proto plugin add neovim "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/neovim/plugin.toml"
proto pin neovim latest --resolve
```
