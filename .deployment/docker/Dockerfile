FROM node:8.1.4-alpine
RUN apk update
RUN apk add yarn

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]
