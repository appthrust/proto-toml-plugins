# GitHub CLI plugin

[GitHub CLI](https://docs.github.com/ja/github-cli/github-cli/about-github-cli) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add gh "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/gh/plugin.toml" --global
proto install gh
```

### Per-project install

```shell
proto plugin add gh "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/gh/plugin.toml"
proto pin gh latest --resolve
```
