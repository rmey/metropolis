FROM node:11-alpine

RUN mkdir -p /app && chown -R node:node /app
USER node
WORKDIR /app

# Bundle app source
COPY ./*.js /app/
COPY ./*.json /app/

RUN npm install

ENV PORT=8080

EXPOSE 8080
CMD [ "npm", "start" ]
