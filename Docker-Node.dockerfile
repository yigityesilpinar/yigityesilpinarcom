# docker build -t yigityesilpinar/docker-node:latest  .
FROM docker:stable-dind AS app-base
RUN apk --update add nodejs