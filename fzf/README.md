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

## Installing versions before 0.54

fzf had its URLs changed with version 0.54, so this plugin was updated accordingly to allow installing the latest versions of fzf. To install versions 0.53 and older of fzf with proto, you have to use an older version of this plugin:

```shell
proto plugin add fzf "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/a94ea8ffa8cdcadf4206e50385d8910a27b1cbff/fzf/plugin.toml"
proto pin fzf 0.53.0
```
