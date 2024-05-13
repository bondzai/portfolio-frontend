# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Stage 2: Serve the built React app using a lightweight Node.js server
FROM node:14-alpine AS serve

# Set the working directory in the container
WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=build /app/dist ./dist

# Install serve to run a simple HTTP server for serving static content
RUN npm install -g serve

# Expose port 5000 to serve the app
EXPOSE 5000

# Command to run the serve when the container starts
CMD ["serve", "-s", "dist", "-l", "5000"]
