FROM node:14-alpine

ENV NODE_ENV=productions

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarm --frozen-lockfile

COPY . .

CMD ["yarn", "start"]