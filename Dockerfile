# docker build -t yigityesilpinar/yigityesilpinarcom:latest .
# docker stop yycom | docker rm yycom | docker run -p 3000:3000 --name yycom yigityesilpinar/yigityesilpinarcom:latest
FROM node:14.16.1-alpine3.13

ENV NPM_CONFIG_LOGLEVEL warn
# only install production dependencies and other production benefits
ENV NODE_ENV production

WORKDIR /usr/src/app
RUN npm install pm2 -g
# installation
COPY package.json package-lock.json  ecosystem.config.js  ./
# RUN sha1sum package-lock.json
RUN npm install

COPY ./dist/ ./dist/

CMD ["pm2-docker", "ecosystem.config.js"]
