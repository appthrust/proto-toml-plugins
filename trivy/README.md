# Trivy plugin

[Trivy](https://aquasecurity.github.io/trivy) plugin for [proto](https://github.com/moonrepo/proto).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add trivy "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/trivy/plugin.toml" --global
proto install trivy
```

### Per-project install

```shell
proto plugin add trivy "source:https://raw.githubusercontent.com/appthrust/proto-toml-plugins/main/trivy/plugin.toml"
proto pin trivy latest --resolve
```
