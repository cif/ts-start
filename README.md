# Typescript Node Service

This is a minimalist NodeJS web service starting point using Typescript.

## In The Box

#### Typescript

Minimal configuration. Augment as necessary.

#### (Micro) Service

Node native `http` lib. No router. Single handler in `src/app.ts`, HTTP/1.1 server created in `src/server.ts`.

#### Tests

Jest runner. Supertest in `tests/app.test.ts` makes HTTP calls to service.

#### Development

Dockerized nodemon dev via `npm run docker:dev` so it works on everyone's machine.

VSCode debug configurations for `Service` and `Tests` (TODO: expose and bind to container ports vs local)

#### Build

Run `npm docker:build` Dockerized build image from `node:10`, final production image from `alpine` ~34MB

Run container locally via `npm run docker:start`, `npm run docker:stop`