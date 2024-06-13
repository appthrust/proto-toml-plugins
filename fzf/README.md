# fzf plugin

[fzf](https://github.com/junegunn/fzf) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add fzf "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/fzf/plugin.toml" --global
proto install fzf
```

### Per-project install

```shell
proto plugin add fzf "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/fzf/plugin.toml"
proto pin fzf latest --resolve
```
