FROM harbor.au32.cn/public/gold-java:8.1

LABEL MAINTAINER="xiaomao361@163.com"

ENV LANG C.UTF-8
ENV TZ Asia/Shanghai

WORKDIR /src

COPY ./http.jar /src/http.jar
COPY ./logback-default.xml /src/logback-default.xml
COPY ./application-default.properties /src/application-default.properties

CMD java -jar /src/http.jar
