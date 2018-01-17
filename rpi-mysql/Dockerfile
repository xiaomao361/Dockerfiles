FROM resin/rpi-raspbian:jessie
MAINTAINER zhouwei <xiaomao361@163.com>

RUN groupadd -r mysql && useradd -r -g mysql mysql

RUN apt-get update && apt-get install -y perl --no-install-recommends

RUN cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV TZ="Asia/Shanghai"

ENV MYSQL_VERSION 5.5

RUN { echo mysql-server mysql-server/data-dir select ''; \
	  echo mysql-server mysql-server/root-pass password ''; \
      echo mysql-server mysql-server/re-root-pass password ''; \
      echo mysql-server mysql-server/remove-test-db select false; \
	} | debconf-set-selections \
	&& apt-get update && apt-get install -y mysql-server="${MYSQL_VERSION}"* \
	&& rm -rf /var/lib/apt/lists/*

RUN	rm -rf /var/lib/mysql && mkdir -p /var/lib/mysql && chown -R mysql:mysql /var/lib/mysql

RUN sed -Ei 's/^(bind-address|log)/#&/' /etc/mysql/my.cnf

VOLUME /var/lib/mysql

COPY entrypoint.sh /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3306
CMD ["mysqld"]
