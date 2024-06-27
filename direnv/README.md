# direnv plugin

[direnv](https://direnv.net/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add direnv "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/direnv/plugin.toml" --global
proto install direnv
```

### Per-project install

```shell
proto plugin add direnv "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/direnv/plugin.toml"
proto pin direnv latest --resolve
```
