FROM alpine:3.5

ENV ETCD_VERSION v3.2.13

RUN apk update && apk add curl bash tree tzdata \
    && cp -r -f  /usr/share/zoneinfo/Asia/Shanghai /etc/localtime  

RUN apk add --update ca-certificates openssl tar && \
    wget https://github.com/coreos/etcd/releases/download/v3.2.13/etcd-v3.2.13-linux-amd64.tar.gz && \
    tar xzvf etcd-v3.2.13-linux-amd64.tar.gz && \
    mv etcd-v3.2.13-linux-amd64/etcd* /bin/ && \
    apk del --purge tar openssl && \
    rm -Rf etcd-v3.2.13-linux-amd64* /var/cache/apk/*

VOLUME /data

EXPOSE 2379 2380

ADD enterpoint.sh /usr/bin/enterpoint.sh

CMD ["enterpoint.sh"]
