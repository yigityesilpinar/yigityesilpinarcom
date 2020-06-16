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

COPY ./dist ./dist
COPY ./build ./build

EXPOSE ${PORT}

CMD ["npm", "run", "prod"]

