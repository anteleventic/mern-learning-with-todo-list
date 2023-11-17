FROM node:18-alpine

WORKDIR /app

COPY client/package.json client/

WORKDIR /app/client

RUN npm install

COPY . .

CMD ["npm", "start"]
