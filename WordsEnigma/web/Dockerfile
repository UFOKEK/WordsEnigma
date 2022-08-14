FROM node:16-alpine as builder

# # Node
# ARG NODE_ENV
# ARG RUNTIME_ENV
# ENV NODE_ENV=$NODE_ENV
# ENV RUNTIME_ENV=$RUNTIME_ENV

WORKDIR /app

COPY web web
COPY .nvmrc .
COPY graphql.config.js .
COPY package.json .
COPY redwood.toml .
COPY yarn.lock .

RUN yarn install
RUN yarn rw build web
RUN rm -rf ./web/src

FROM nginx as runner

COPY --from=builder /app/web/dist /usr/share/nginx/html
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

RUN ls -lA /usr/share/nginx/html

EXPOSE 8910