# git-cliff plugin

[git-cliff](https://git-cliff.org/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add git-cliff "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/git-cliff/plugin.toml" --global
proto install git-cliff
```

### Per-project install

```shell
proto plugin add git-cliff "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/git-cliff/plugin.toml"
proto pin git-cliff latest --resolve
```
