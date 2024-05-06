# syntax=docker/dockerfile:1

# Build Layer
FROM node:20-slim AS builder
WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile
COPY . .
RUN yarn build

# Production Modules Layer
FROM node:20-slim AS modules
ENV NODE_ENV=production
WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile

# Production Run
FROM gcr.io/distroless/nodejs20-debian12:latest
ENV NODE_ENV=production
WORKDIR /app
COPY --from=modules --chown=nonroot:nonroot /work/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /work/.next ./.next
COPY --from=builder --chown=nonroot:nonroot /work/public ./public
COPY --from=builder --chown=nonroot:nonroot /work/package.json ./package.json
USER nonroot
EXPOSE 3000
CMD [ "node_modules/.bin/next", "start" ]
