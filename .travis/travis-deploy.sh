#!/usr/bin/env bash
set -e

echo "$DOCKER_PASSWORD" | docker login -u loriotbe --password-stdin
docker build -t loriotbe/client-anto .
docker push loriotbe/client-anto
