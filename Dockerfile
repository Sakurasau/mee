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

COPY ./packages/mee-web ./packages/mee-web
COPY pnpm-workspace.yaml . 
COPY package.json . 
COPY pnpm-lock.yaml . 
COPY tsconfig.paths.json . 

RUN pnpm install

# Adding environment variables
ARG PORT_FRONTEND
ARG CLIENT_WEB_BASE_PREFIX
ENV VITE_CLIENT_WEB_BASE_PREFIX=${CLIENT_WEB_BASE_PREFIX}
ENV VITE_CLIENT_WEB_PORT=${PORT_FRONTEND}

RUN pnpm run build:web

EXPOSE ${PORT_FRONTEND}

CMD ["pnpm", "run", "serve:web"]
