# buildifier plugin

[buildifier](https://github.com/bazelbuild/buildtools/tree/master/buildifier#linter) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add buildifier "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/buildifier/plugin.toml" --global
proto install buildifier
```

### Per-project install

```shell
proto plugin add buildifier "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/buildifier/plugin.toml"
proto pin buildifier latest --resolve
```
