#! /bin/bash

docker-compose -f /home/gold/ai/dubbo/dubbo.yml down

docker-compose -f /home/gold/ai/dubbo/dubbo.yml up -d
