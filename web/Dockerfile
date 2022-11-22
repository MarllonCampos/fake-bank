FROM node:latest
WORKDIR /usr
COPY package*.json /
COPY tsconfig.json /

RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm","run", "preview"]

