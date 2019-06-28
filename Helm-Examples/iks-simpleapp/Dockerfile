FROM node:8-alpine

# Create app directory
RUN mkdir /src
WORKDIR /src



# If you are building your code for production
# RUN npm ci --only=production
RUN apk add python make g++ --no-cache
COPY ./nodejs-MEAN-stack/package*.json /src/
RUN npm install
RUN apk del python make g++ gcc binutils

# Bundle app source
COPY ./nodejs-MEAN-stack/server /src/server
COPY ./nodejs-MEAN-stack/public /src/public
COPY ./nodejs-MEAN-stack/server.js /src/server.js
COPY ./nodejs-MEAN-stack/.env /src/.env

EXPOSE 6020
CMD [ "npm", "start" ]
