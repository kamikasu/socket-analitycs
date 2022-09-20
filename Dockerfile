FROM node:16.16.0-alpine as builder
RUN apk update && apk add tzdata
ENV TZ=America/Bogota
WORKDIR /usr/src
COPY src .
RUN yarn install
RUN yarn run dump:env:prod
RUN yarn run build
EXPOSE 3100
ENV DEBUG='*'
CMD yarn run start 