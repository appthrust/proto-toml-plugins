# CUE plugin

[cue](https://cuelang.org/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add cue "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/cue/plugin.toml" --global
proto install cue
```

### Per-project install

```shell
proto plugin add cue "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/cue/plugin.toml"
proto pin cue latest --resolve
```
