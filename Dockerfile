FROM java:8-alpine

COPY target/uberjar/flex-webapp.jar /flex-webapp/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/flex-webapp/app.jar"]
