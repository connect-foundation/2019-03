FROM node:10.17

RUN mkdir /usr/src/server
WORKDIR /usr/src/server
ENV NODE_ENV=production

COPY package.json /usr/src/server/package.json
RUN npm install

COPY . /usr/src/server

CMD ["npm", "run", "production"]