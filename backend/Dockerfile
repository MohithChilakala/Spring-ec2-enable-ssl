FROM openjdk:17
LABEL maintainer="demo"
ADD target/demo-0.0.1-SNAPSHOT.jar springboot-docker.jar
ENTRYPOINT ["java", "-jar", "springboot-docker.jar"]