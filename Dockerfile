# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1.38 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install

# Copy the entire app source code
COPY . .

# Build the application for production
RUN bun run build

# Step 2: Serve the built application using a lightweight server
FROM nginx:stable-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static resources
RUN rm -rf ./*

# Copy the build output from the first stage to Nginx
COPY --from=build /app/dist .

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]