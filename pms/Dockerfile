FROM java:8-alpine
LABEL MAINTAINER="xiaomao361@163.com"

COPY ./pms-server /pms-server

CMD /pms-server/bin/startup.sh \
    && tail -f /pms-server/logs/catalina.out
