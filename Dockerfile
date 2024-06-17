# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm
RUN npm install -g serve
# Set the working directory in the container
WORKDIR /app

# Copy the package.json and pnpm-lock.yaml files to the container
COPY package.json pnpm-lock.yaml ./

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app
RUN pnpm run build

# Expose the port that the server will listen on
EXPOSE 3000

# Start the application
CMD [ "pnpm", "serve", "dist" ]