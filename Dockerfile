#STEP 1 BUILD Vue Project
FROM node:12.18.1-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run build