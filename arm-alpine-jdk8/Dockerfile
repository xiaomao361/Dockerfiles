FROM hypriot/rpi-alpine-scratch

LABEL Description="used for run java app on Raspberry Pi 3" Version="1.1"

WORKDIR /home
# Set environment
ENV JAVA_VERSION=8 \
    JAVA_HOME="/opt/jdk" \
    PATH=$PATH:${PATH}:/opt/jdk/bin

# Default to UTF-8 file.encoding
ENV LANG C.UTF-8
ENV TZ Asia/Shangha
RUN apk update && apk add tzdata \
	&& cp -r -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
	&& apk del tzdata

# Download and install glibc
ADD resource /home/
RUN apk add bash wget ca-certificates && \
  apk add --allow-untrusted glibc-2.22-r1.apk && \
  apk add --allow-untrusted glibc-bin-2.22-r1.apk && \
  mv libgcc* /lib && \
  chmod a+x /lib/libgcc_s.so* && \
  cp /usr/glibc-compat/lib/ld-linux-armhf.so.3 /lib && \
  tar -xzf jdk-8u172-linux-arm32-vfp-hflt.tar.gz && \
  echo "" > /etc/nsswitch.conf && \
  mkdir /opt && \
  mv jdk1.8.0_172 /opt/jdk1.8.0_172 && \
  ln -s /opt/jdk1.8.0_172 /opt/jdk && \
  ln -s /opt/jdk/jre/bin/java /usr/bin/java && \
  /usr/glibc-compat/sbin/ldconfig /lib /usr/glibc-compat/lib /opt/jdk/lib /opt/jdk/jre/lib /opt/jdk/jre/lib/arm /opt/jdk/jre/lib/arm/jli && \
  echo "hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4" >> /etc/nsswitch.conf && \
  rm -f glibc-*.apk jdk*.tar.gz /opt/jdk/src.zip && \
  rm -rf $JAVA_HOME/jre/bin/jjs \
       $JAVA_HOME/jre/bin/keytool \
       $JAVA_HOME/jre/bin/orbd \
       $JAVA_HOME/jre/bin/pack200 \
       $JAVA_HOME/jre/bin/policytool \
       $JAVA_HOME/jre/bin/rmid \
       $JAVA_HOME/jre/bin/rmiregistry \
       $JAVA_HOME/jre/bin/servertool \
       $JAVA_HOME/jre/bin/tnameserv \
       $JAVA_HOME/jre/bin/unpack200 && \
  apk del wget ca-certificates && \
  rm -rf /var/cache/apk/* && \
  rm -rf /home/*
