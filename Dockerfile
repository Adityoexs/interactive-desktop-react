# Build stage
FROM node:20 as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app (production)
RUN npm run build

# Production stage (Nginx for serving the build)
FROM nginx:alpine

# Copy the build folder from the build stage to Nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]