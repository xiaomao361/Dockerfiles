#! /bin/bash

version=$1
home=/home/gold/ai/http

true >${home}/http.yml

cat >${home}/http.yml <<EOF
version: '3'

services: 
  app:
    image: harbor.au32.cn/pro/ai-http:${version}
    restart: always
    ports:
      - 8088:8088
    environment:
      TZ: Asia/Shanghai
    volumes:
      - /data/applogs/:/data/applogs/
    networks:
      - backend

networks:
  backend:
    external:
      name: backend

EOF
