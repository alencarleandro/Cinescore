## Etapa de build
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copia apenas o pom primeiro para aproveitar cache
COPY pom.xml .

# Copia o restante do código
COPY src ./src

# Build do jar (sem testes para ficar mais rápido no Render)
RUN mvn -B -DskipTests package

## Etapa de runtime
FROM eclipse-temurin:21-jre

WORKDIR /app

# Copia o jar gerado na etapa de build
COPY --from=build /app/target/cinescore-0.0.1-SNAPSHOT.jar app.jar

# A porta interna padrão; o Render seta a variável de ambiente PORT
ENV PORT=8080
EXPOSE 8080

# Usa server.port=${PORT:8080} já configurado no application.properties
ENTRYPOINT ["java", "-jar", "app.jar"]

