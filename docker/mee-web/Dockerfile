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

################################################################################
# Create a stage for installing production dependencies.
FROM base as deps

# Leverage a cache mount to /root/.local/share/pnpm/store to speed up subsequent builds.
# Use bind mounts to package.json and pnpm-lock.yaml from the monorepo root.
RUN --mount=type=bind,source=pnpm-workspace.yaml,target=pnpm-workspace.yaml \
    --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --prod --frozen-lockfile

################################################################################
# Create a stage for building the `mee-web` package.
FROM deps as build

# Navigate to the `mee-web` package.
WORKDIR /usr/src/app/packages/mee-web

# Install package-specific dependencies.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Copy the rest of the source files for `mee-web`.
COPY ./packages/mee-web .

# Run the build script for `mee-web`.
RUN pnpm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies.
FROM base as final

# Set working directory for the final stage.
WORKDIR /usr/src/app/packages/mee-web

# Use production node environment by default.
ENV NODE_ENV production

# Run the application as a non-root user.
USER node

# Copy package.json and pnpm-workspace.yaml so that package manager commands can be used.
COPY package.json .
COPY pnpm-workspace.yaml .

# Copy the production dependencies and the built application from the previous stages.
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/packages/mee-web/dist ./dist

# Expose the port that the application listens on (например, 3000).
EXPOSE 3000

# Run the application with the serve command.
CMD ["serve", "-s", "dist", "-l", "3000"]
