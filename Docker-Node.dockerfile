# docker build  -f Docker-Node.dockerfile -t yigityesilpinar/docker-node:latest  .
FROM docker:stable-dind AS app-base
RUN apk --update add nodejs npm curl nano bash
# install heroku CLI
# RUN curl https://cli-assets.heroku.com/install.sh --output ./install.sh && sh install.sh