# Dotenv-linter plugin

[Dotenv-linter](https://github.com/dotenv-linter/dotenv-linter) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add dotenv-linter "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/dotenv-linter/plugin.toml" --global
proto install dotenv-linter
```

### Per-project install

```shell
proto plugin add dotenv-linter "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/dotenv-linter/plugin.toml"
proto pin dotenv-linter latest --resolve
```
