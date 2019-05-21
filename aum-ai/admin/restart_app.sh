#! /bin/bash

docker-compose -f /home/gold/ai/admin/admin.yml down

docker-compose -f /home/gold/ai/admin/admin.yml up -d
