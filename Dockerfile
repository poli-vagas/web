FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
# Install dependencies
RUN yarn install
# Copy app files
COPY . .
# Env variables
ENV REACT_APP_ENABLED_MIRAGE=false
ENV REACT_APP_API_URL=https://api.poli-vagas.mario.engineering
# Build the app
RUN yarn run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
