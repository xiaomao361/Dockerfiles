#! /bin/bash

docker-compose -f /home/gold/ai/http/http.yml down

docker-compose -f /home/gold/ai/http/http.yml up -d
