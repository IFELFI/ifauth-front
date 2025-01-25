FROM node:22-alpine as build

RUN apk add --no-cache g++ make py3-pip

WORKDIR /app
COPY . ./
RUN npm install -y && \
    npm run build && \
    npm prune --production

FROM node:22-alpine as deploy

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.env ./.env

EXPOSE 3000

ENTRYPOINT ["node", "-r", "dotenv/config", "build"]
