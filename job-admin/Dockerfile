FROM java:8-alpine
LABEL MAINTAINER="xiaomao361@163.com"

COPY ./job-admin /job-admin

CMD /job-admin/bin/startup.sh \
    && tail -f /job-admin/logs/catalina.out
