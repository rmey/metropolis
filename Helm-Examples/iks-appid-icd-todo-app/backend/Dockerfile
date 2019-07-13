FROM node:11-alpine

# Create app directory
RUN mkdir /app
WORKDIR /app


# Bundle app source
COPY ./*.js /app/
COPY ./*.json /app/

RUN npm install


EXPOSE 8080
CMD [ "npm", "start" ]
