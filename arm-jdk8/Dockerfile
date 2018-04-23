FROM ogomez/arm32v7-alpine

LABEL Description="used for run java app on Raspberry Pi 3" Version="1.1"

WORKDIR /home
# Set environment
ENV JAVA_VERSION=8

# Default to UTF-8 file.encoding
ENV LANG C.UTF-8
ENV TZ Asia/Shangha
RUN apk update && apk add tzdata openjdk8-jre \
	&& cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
	&& apk del tzdata \
    && rm -rf /var/cache/apk/*