FROM nginx:1.16-alpine

LABEL MAINTAINER="xiaomao361@163.com"

WORKDIR  /usr/share/nginx/html

EXPOSE 443 80

COPY ./gold.conf /etc/nginx/conf.d/gold.conf
COPY ./ssl.conf /etc/nginx/conf.d/ssl.conf
COPY ./au32.cn /home/au32.cn/


RUN rm -rf /etc/nginx/conf.d/default.conf
