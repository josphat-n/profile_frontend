# Use an official Node runtime as a build stage
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./
COPY package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app for production
RUN npm run build

# Use nginx to serve the build folder
FROM nginx:alpine

# Copy the build output from the build stage to nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Remove default nginx website configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration (optional, can add for SPA routing)
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]