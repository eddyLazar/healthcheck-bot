#!/bin/bash

# to have env varibales on the frontend need to create .env file and build after they are exposed
touch .env
echo "PORT=$PORT" >> .env
echo "BOT_TOKEN=$BOT_TOKEN" >> .env
echo "TELEGRAM_CHANNEL=$TELEGRAM_CHANNEL" >> .env
echo "TIMEOUT=$TIMEOUT" >> .env
echo "URLS=$URLS" >> .env

npm run build-front

npm start
