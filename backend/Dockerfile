FROM node:latest
WORKDIR /usr
COPY package*.json /
COPY tsconfig.json /

RUN npm ci
COPY . .
RUN npm rebuild bcrypt --build-from-source
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]

