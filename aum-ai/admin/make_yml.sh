#! /bin/bash

version=$1

home=/home/gold/ai/admin

true >${home}/admin.yml

cat >${home}/admin.yml <<EOF
version: '3'

services: 

  app:
    image: harbor.au32.cn/pro/ai-admin:${version}
    restart: always
    ports:
      - 8082:8082
    environment:
      TZ: Asia/Shanghai
    volumes:
      - /data/applogs/:/data/applogs/
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8082/env"]
      interval: 1m30s
      timeout: 10s
      retries: 3
    networks:
      - backend

networks:
  backend:
    external:
      name: backend

EOF
