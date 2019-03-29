FROM java:8-alpine
LABEL MAINTAINER="xiaomao361@163.com"

COPY ./dubbo-monitor /dubbo-monitor

CMD /dubbo-monitor/bin/start.sh \
    && tail -f /dubbo-monitor/logs/stdout.log
