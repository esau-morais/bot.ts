FROM node:16-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile 

COPY . .

RUN pnpm tsc 

EXPOSE 3000

CMD ["pnpm", "dev"]
