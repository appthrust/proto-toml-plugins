# sccache plugin

[sccache](https://github.com/mozilla/sccache/) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add sccache "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/sccache/plugin.toml" --global
proto install sccache
```

### Per-project install

```shell
proto plugin add sccache "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/sccache/plugin.toml"
proto pin sccache latest --resolve
```
