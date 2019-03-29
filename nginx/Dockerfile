FROM nginx:1.14-alpine

LABEL MAINTAINER="xiaomao361@163.com"

COPY ./gold.conf /etc/nginx/conf.d/gold.conf
RUN rm -rf /etc/nginx/conf.d/default.conf
