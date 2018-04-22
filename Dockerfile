//Dockerfile
FROM node:7.10.0
# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:

ADD package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build

ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "run", "deploy" ]

//.dockerignore
dist
node_modules