# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.20.0
ARG PNPM_VERSION=9.9.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Install pnpm & serve globally.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION} \
    pnpm i -g serve

FROM base as deps

FROM deps as build

WORKDIR /usr/src/app

COPY ./packages/mee-web          ./packages/mee-web
COPY ./packages/config-env       ./packages/config-env
COPY ./packages/config-tsconfig  ./packages/config-tsconfig
COPY pnpm-workspace.yaml . 
COPY package.json . 
COPY pnpm-lock.yaml . 

RUN pnpm install

# Adding environment variables
ARG PORT_FRONTEND
ARG CLIENT_WEB_BASE_PREFIX
ARG VITE_URL_SERVER_AUTH_GOOGLE
ARG VITE_URL_SERVER
ENV VITE_CLIENT_WEB_PORT=${PORT_FRONTEND}
ENV VITE_CLIENT_WEB_BASE_PREFIX=${CLIENT_WEB_BASE_PREFIX}
ENV VITE_URL_SERVER_AUTH_GOOGLE=${VITE_URL_SERVER_AUTH_GOOGLE}
ENV VITE_URL_SERVER=${VITE_URL_SERVER}

RUN pnpm run build:web

EXPOSE ${PORT_FRONTEND}

CMD ["pnpm", "run", "serve:web"]
