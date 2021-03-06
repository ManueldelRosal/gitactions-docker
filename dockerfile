FROM node:16.14 as development

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.14 as production

ARG NODE_ENV=production
ENV NODE_ENV=&{NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/app.js"]











