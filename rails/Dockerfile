# ruby images base on centos7 
#
# incloud: ruby 2.2.2 rails 4.2.1
#
# version:                 2.0

FROM docker.io/centos 

ENV TZ=Asia/Shanghai

WORKDIR /home

# server init with yum 
RUN yum  -y update
RUN yum -y install gcc gcc-c++ ncurses-devel perl pcre-devel openssl openssl-devel \
    libcurl-devel wget vim tar which crontabs rsyslog mysql-devel bzip2-devel freetype-devel \
    libjpeg-devel libpng-devel libtiff-devel giflib-devel zlib-devel ghostscript-devel \
    djvulibre-devel libwmf-devel jasper-devel libtool-ltdl-devel libX11-devel libXext-devel \
    libXt-devel lcms-devel libxml2-devel librsvg2-devel OpenEXR-devel openjpeg2-devel openjpeg2-tools openjpeg2 \
    autoconf automake cmake libtool make mercurial nasa pkgconfig


# change local timezone
RUN rm -rf /etc/localtime
RUN ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ADD crond /etc/pam.d/crond

# install rvm 
RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB 
RUN curl -sSL https://get.rvm.io | bash -s stable 
RUN /bin/bash -l -c "source /etc/profile.d/rvm.sh"

# install ruby and rails
RUN /bin/bash -l -c "rvm install 2.2.2"
RUN /bin/bash -l -c "gem sources -a http://gems.ruby-china.org/ --remove https://rubygems.org/"
RUN /bin/bash -l -c "gem install rails -v '4.2.1'"
RUN /bin/bash -l -c "gem install puma"

# install nodejs
RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN yum -y install nodejs 


ADD ImageMagick-6.9.4-10.tar.gz /home/
RUN cd /home/ImageMagick-6.9.4-10&&./configure --prefix=/usr/local \ 
    --with-bzlib --with-fontconfig --with-freetype --with-gslib --with-gvc \ 
    --with-jpeg --with-jp2 --with-png --with-tiff --with-rsvg --with-wmf \
    --with-openjp2 --with-lzma --with-lcms --enable-shared --disable-static --without-magick-plus-plus&&make&&make install 
RUN rm -rf /home/*

# install ffmpeg
RUN yum install -y epel-release
RUN rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-1.el7.nux.noarch.rpm
RUN yum install -y ffmpeg

