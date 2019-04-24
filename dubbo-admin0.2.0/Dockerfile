FROM java:8

LABEL MAINTAINER="xiaomao361@163.com"

ENV TZ=Asia/Shanghai

RUN cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

ADD dubbo-admin-0.2.0.jar /src/app.jar

EXPOSE 8080

CMD java -jar /src/app.jar
