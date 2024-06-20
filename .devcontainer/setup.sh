#!/usr/bin/env bash

curl -fsSL https://moonrepo.dev/install/proto.sh | PROTO_HOME=/usr/local bash -s -- --yes
cd /workspace
proto use