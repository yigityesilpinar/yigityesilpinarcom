# docker build  -f Docker-Node.dockerfile -t yigityesilpinar/docker-node:latest  .
FROM docker:stable-dind AS app-base
RUN apk --update add nodejs npm curl nano bash wget make ca-certificates openssl python3  && \
    update-ca-certificates
# install heroku CLI
# RUN curl https://cli-assets.heroku.com/install.sh --output ./install.sh && sh install.sh

# install gcloud CLI
RUN wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz && \
    tar zxvf google-cloud-sdk.tar.gz && ./google-cloud-sdk/install.sh --usage-reporting=false --path-update=true && \
    google-cloud-sdk/bin/gcloud --quiet components update