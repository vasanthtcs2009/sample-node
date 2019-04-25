#to run node
FROM node:alpine

USER root

#set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


#install npm dependencies
COPY package*.json ./
RUN npm install

#copy all the code
COPY . .

#start the app
EXPOSE 8080
CMD [ "npm" , "start" ]
