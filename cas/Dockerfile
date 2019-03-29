FROM java:8-alpine
LABEL MAINTAINER="xiaomao361@163.com"

COPY ./cas-server /cas-server

CMD /cas-server/bin/startup.sh \
    && tail -f /cas-server/logs/catalina.out
