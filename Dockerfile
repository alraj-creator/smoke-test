FROM registry.access.redhat.com/ubi9/nodejs-20-minimal:latest

WORKDIR /opt/app-root/src

COPY package.json server.js ./

EXPOSE 8080

CMD ["node", "server.js"]
