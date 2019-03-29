FROM java:8
LABEL MAINTAINER="xiaomao361@163.com"

COPY ./dubbo-admin /dubbo-admin

CMD /dubbo-admin/bin/startup.sh \
    && tail -f /dubbo-admin/logs/catalina.out
