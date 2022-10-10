FROM node:18

WORKDIR /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install dependences

COPY package*.json ./

RUN  npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start"]
