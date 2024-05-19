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
WORKDIR /work
COPY package.json yarn.lock ./
RUN yarn install --non-interactive --frozen-lockfile --prod

# Production Run
FROM gcr.io/distroless/nodejs20-debian12:latest
WORKDIR /app
COPY --from=modules --chown=nonroot:nonroot /work/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /work/dist ./dist
USER nonroot
EXPOSE 3000
CMD [ "dist/main.js" ]
