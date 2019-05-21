FROM java:8-alpine

LABEL MAINTAINER="xiaomao361@163.com"

ENV LANG C.UTF-8
ENV TZ Asia/Shanghai

WORKDIR /src

RUN apk update && apk add tzdata \
    && apk add curl \
    && cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && apk add --update ttf-dejavu fontconfig \
    && apk del tzdata \
    && rm -rf /var/cache/apk/*

COPY ./simsun.ttc /usr/lib/jvm/java-1.8-openjdk/jre/lib/fonts/simsun.ttc

