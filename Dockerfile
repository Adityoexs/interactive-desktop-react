# Use an official node runtime as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the project
RUN npm run build

# Use a smaller image to serve the app
FROM nginx:alpine

# Copy the build folder to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that the app will be served on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
