# Build Image
FROM node:10 as build-image

COPY tsconfig.json ./tsconfig.json
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
COPY src ./src

RUN npm install
RUN npm run build
RUN npm prune --production

# Production Image ~25MB
FROM alpine

COPY --from=build-image ./dist ./dist
COPY --from=build-image ./node_modules ./node_modules
COPY package.json ./package.json

RUN apk add --update nodejs

CMD [ "node", "dist/server.js" ]