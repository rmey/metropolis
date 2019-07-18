FROM node:11-alpine as build-env

# Create app directory
RUN mkdir /app
WORKDIR /app

# copy client src files
RUN mkdir -p /app/client/src && mkdir -p /app/client/public
COPY ./client/src /app/client/src
COPY ./client/public/* /app/client/public/
COPY ./client/*.json /app/client/
# build React production directory
RUN cd /app/client && npm install && npm run-script build
RUN rm -rf /app/client/src  rm -rf /app/client/node_modules

FROM node:11-alpine
RUN mkdir -p /app && chown -R node:node /app
USER node
WORKDIR /app

COPY --from=build-env /app .

# copy node.js files
COPY ./*.json /app/
COPY ./*.js /app/
RUN npm install

EXPOSE 8888
CMD [ "npm", "start" ]
