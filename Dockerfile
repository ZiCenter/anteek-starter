
FROM node:16-slim AS builder
RUN apt-get -qy update && apt-get -qy install openssl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG DATABASE_CLIENT=postgresql

RUN npm run build


FROM node:16-slim AS server
RUN apt-get -qy update && apt-get -qy install openssl

WORKDIR /app

COPY package* ./

RUN npm install --production

COPY --from=builder ./app/dist ./dist
COPY --from=builder ./app/prisma ./prisma

ENV NODE_ENV production

RUN npm run anteek:prisma

EXPOSE 3000

CMD ["npm", "run", "start:prod"]

