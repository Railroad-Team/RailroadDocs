# Stage 1: Build the application
FROM node:24.3.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the VitePress site
RUN npm run build

# Stage 2: Create a data-only container from a minimal base image
FROM alpine:latest

# Copy the built static files from the builder stage to a standard location
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html

# This container is intended to be used for its data volume.
# A command is added to provide a clear message if someone runs it directly.
CMD ["echo", "This is a data-only container for the Railroad IDE documentation. It does not run a web server."]