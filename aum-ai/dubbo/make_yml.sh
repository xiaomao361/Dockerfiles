#! /bin/bash

version=$1
home=/home/gold/ai/dubbo

true >${home}/dubbo.yml

cat >${home}/dubbo.yml <<EOF
version: '3'

services: 
  app:
    image: harbor.au32.cn/pro/ai-dubbo:${version}
    restart: always
    ports:
      - 8083:8083
      - 20880:20880
    environment:
      TZ: Asia/Shanghai
      DUBBO_IP_TO_REGISTRY: 172.16.50.162
      DUBBO_PORT_TO_REGISTRY: 20880
    volumes:
      - /data/applogs/:/data/applogs/
    networks:
      - backend

networks:
  backend:
    external:
      name: backend

EOF
