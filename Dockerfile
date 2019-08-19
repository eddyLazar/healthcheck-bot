FROM node:10-alpine


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

RUN npm install typescript@^3.5.3

RUN npm install parcel-bundler@^1.12.3

COPY . .

ENV PARCEL_WORKERS 1

RUN npm run build-ts

RUN chmod +x ./entrypoint.sh

RUN cat ./entrypoint.sh

EXPOSE 8080

ENTRYPOINT [ "sh", "entrypoint.sh" ]
