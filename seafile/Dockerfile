FROM ubuntu
MAINTAINER zhou wei <xiaomao361@163.com>

ENV SEAFILE_VERSION 6.2.5

WORKDIR /home

# init the base depend
RUN apt-get update && \
    apt-get install -y python python2.7 libpython2.7 python-setuptools python-imaging python-ldap python-urllib3 ffmpeg python-pip python-mysqldb python-memcache && \
    pip install pillow moviepy
RUN ulimit -n 30000

# ports and data fie path
RUN mkdir /opt/seafile
VOLUME /opt/seafile
EXPOSE 10001 12001 8000 8082

ADD seafile-server_6.2.5_x86-64.tar.gz /home

ADD entrypoint.sh /usr/bin/entrypoint.sh

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD ["entrypoint.sh"]
