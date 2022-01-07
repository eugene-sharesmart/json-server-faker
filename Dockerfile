FROM node:lts-alpine3.15

ENV NODE_ENV=production
WORKDIR /app

COPY package.json .
RUN npm install --production --quiet

COPY . .
CMD ["npm", "run", "start"]
