FROM resin/rpi-raspbian:jessie
MAINTAINER zhouwei <xiaomao361@163.com>

RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV TZ="Asia/Shanghai"
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee /etc/apt/sources.list.d/webupd8team-java.list
RUN echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu xenial main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections
RUN apt-get update && apt-get install -y locales 
RUN apt-get install -y oracle-java8-jdk
RUN rm -rf /var/lib/apt/lists/*

ENV JAVA_HOME /usr/lib/jvm/jdk-8-oracle-arm32-vfp-hflt

RUN locale-gen zh_CN.UTF-8
ENV LANG zh_CN.UTF-8
ENV LC_CTYPE zh_CN.UTF-8

CMD ["bash"]
