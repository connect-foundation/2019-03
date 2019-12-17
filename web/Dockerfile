FROM node:10.17 as builder

RUN mkdir /usr/src/client
WORKDIR /usr/src/client

COPY package.json /usr/src/client/package.json
RUN npm install

COPY . /usr/src/client
RUN npm run build

FROM nginx:1.17.5
COPY config/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/client/build /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]