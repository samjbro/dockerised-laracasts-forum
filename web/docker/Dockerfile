FROM node:8.1.0-alpine

WORKDIR usr/src/web

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]