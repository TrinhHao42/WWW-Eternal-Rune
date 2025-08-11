FROM openjdk:26-oraclelinux9

ARG JAR_FILE=targer/*.jar

COPY ./target/Eternal_Rune_Backend-0.0.1.jar app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]