FROM xiaomao361/java8

# Install maven
RUN apt-get update
RUN apt-get install -y maven
ADD *.jar $JAVA_HOME/jre/lib/ext/
ADD *.so $JAVA_HOME/jre/lib/amd64/