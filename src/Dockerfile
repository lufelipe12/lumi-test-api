FROM node:16.16-alpine AS base

WORKDIR /lumi/app
COPY [ "package*.json", "tsconfig.build.json", "tsconfig.json", "package-lock.json" , "./" ]

FROM base AS dev
RUN npm install --frozen-lockfile
COPY . .
EXPOSE 3001
CMD [ "npm", "run", "start:dev", "app" ]

FROM base AS prod

RUN npm install install --frozen-lockfile --production
COPY . .
RUN npm install global add @nestjs/cli
RUN npm install build
EXPOSE 3001
CMD [ "npm run", "start:prod app" ]