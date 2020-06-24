# docker build -t yigityesilpinar/yigityesilpinarcom:latest .
# docker run -p 8080:8080 --name yycom yigityesilpinar/yigityesilpinarcom:latest
FROM node:12-alpine AS app-base

ENV NPM_CONFIG_LOGLEVEL warn
ARG PORT=8080
# only install production dependencies and other production benefits
ENV NODE_ENV production

# installation
COPY package.json package-lock.json ./
# RUN sha1sum package-lock.json
RUN npm install


# build 
# COPY ./src ./src
# COPY ./config ./config
# COPY .babelrc tsconfig.json ./
# RUN npm run build

COPY ./build ./build

EXPOSE ${PORT}

CMD ["npm", "run", "prod"]

