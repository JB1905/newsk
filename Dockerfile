FROM node:lts

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD nam run watch:tailwind && npm run dev
