# dev.ts

## About

`dev.ts` was created to learn more about the concepts of `discord.js` and to serve [my newest Discord community](https://tiny.emots.dev/twdctr) 

## (_WIP_) Features

- [x] Welcome new guild members

...

## Setup

This project uses Node.js + TypeScript + discord.js behind the scenes. To set up this project locally or virtually (if you're using a virtual machine), follow the steps down below:

1. Clone the project (using `gh`)

```shell
gh repo clone esau-morais/bot.ts
```

2. Install the dependencies (using `pnpm`) 

```shell
pn install
```

> Before continuing to the 3rd step, you must have set the environment variables. Take a look at the [`.env.example` file](./env.example)

3. Running the project (using `pnpm`)

```shell
pn dev
```

> :information_source: **Info:** I use `pn` as the alias for `pnpm` 

4. Running the project (using Docker)

```shell
docker compose build && docker compose up
```

## LICENSE

For more information, read the `LICENSE` file at the root of the project.
