FROM node:10-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

RUN npm install typescript@^3.5.3

COPY . .

RUN npm run build-ts

EXPOSE 8080

CMD [ "npm", "start" ]
