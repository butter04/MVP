FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV MONGO_URI=mongodb://mongo:27017/mydatabase

# Lancer l'application
CMD ["node", "index.js"]
