FROM node:6
MAINTAINER Name Here <username@localhost>
RUN mkdir -p /usr/helloworldapi
COPY ./src /usr/helloworldapi
WORKDIR /usr/helloworldapi
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
