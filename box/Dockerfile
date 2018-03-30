FROM armhfbuild/java 

WORKDIR /code

ADD config.properties /code/config.properties
ADD txCloudClient-jar-with-dependencies.jar /code/target/txCloudClient-jar-with-dependencies.jar
ADD dicom.db /code/dicom.db

EXPOSE 4567

ADD entrypoint.sh /usr/bin/entrypoint.sh

CMD ["entrypoint.sh"]
