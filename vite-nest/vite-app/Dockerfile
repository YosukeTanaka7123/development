# syntax=docker/dockerfile:1

# Build Layer
FROM node:20-slim AS builder
ARG MODE=development
WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile
COPY . .
RUN yarn build --mode ${MODE}

# Nginx Deploy
FROM nginx:alpine-slim
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /work/dist /usr/share/nginx/html
# EXPOSE 3000
