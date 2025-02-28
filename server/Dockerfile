FROM node:20-alpine

#set working directory
WORKDIR /app

#copy .json file
COPY package*.json ./
RUN npm install

#copy rest of the code
COPY . .

EXPOSE 5000

#start the backend application
CMD [ "nodemon" ,"app.js" ]