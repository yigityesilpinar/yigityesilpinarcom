#!/bin/bash 

# docker build -t yigityesilpinarcom:local  .

docker stop yigityesilpinarcomcontainer
docker rm yigityesilpinarcomcontainer


docker run  -p 8080:8080 --name yigityesilpinarcomcontainer yigityesilpinar/yigityesilpinarcom:latest

# -d option for deamon mode
# -p is host:container
# docker run -p 8080:8080 --name yigityesilpinarcomcontainer yigityesilpinarcom:local