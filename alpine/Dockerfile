FROM alpine

# Default to UTF-8 file.encoding
ENV LANG C.UTF-8
ENV TZ Asia/Shangha
RUN apk update && apk add tzdata \
	&& cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
	&& apk del tzdata \
	&& rm -rf /var/cache/apk/*
