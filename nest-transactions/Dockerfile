# Use an official Node.js runtime as a parent image
FROM node:lts-bullseye

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the root directory of the app
COPY package*.json ./

# Install all dependencies
RUN npm install

# Bundle app source by copying from local "src" directory to the working directory in the container
COPY . .

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the Docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "run", "start:dev" ]