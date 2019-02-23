FROM node:11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build
RUN npm install -g serve


ENV NODE_ENV=prod
EXPOSE 5000
CMD [ "serve", "-s", "build" ]
