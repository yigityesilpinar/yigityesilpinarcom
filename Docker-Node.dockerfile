#! This image is used as a CI Container
# docker build  -f Docker-Node.dockerfile -t yigityesilpinar/docker-node:latest  .
# docker run -it --name docker-node yigityesilpinar/docker-node bash 
# docker cp `pwd` docker-node:/repository/
FROM docker:stable-dind AS app-base
RUN apk --update add nodejs npm curl nano bash wget make ca-certificates openssl python3 git&& \
    update-ca-certificates
# install heroku CLI
# RUN curl https://cli-assets.heroku.com/install.sh --output ./install.sh && sh install.sh

# install gcloud CLI
RUN wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz && \
    tar zxvf google-cloud-sdk.tar.gz && ./google-cloud-sdk/install.sh --usage-reporting=false --path-update=true && \
    google-cloud-sdk/bin/gcloud components install kubectl -q && \
    google-cloud-sdk/bin/gcloud -q components update

# prepare git and ssh configs for CI

RUN git config --global user.email "yigityesilpinar@gmail.com" && \
    git config --global user.name "yigityesilpinar" && \
    git config --global url."git@gitlab.com:".insteadOf "https://gitlab.com/" && \
    mkdir /root/.ssh 