# tsc-watch-docker-example

Sample Project to showcase bug of `tsc-watch` library when used inside of Docker

## Getting Started

```sh
# install dependencies
npm install

# run locally
npm run tsc-watch

# run using nodemon
npm run nodemon

# run inside of docker
docker-compose up --build
```

## Steps to reproduce the bug

-   run app with docker
    -   note that both versions of the app with start with no problems
-   make a change in src/index.ts
    -   the app using nodemon will succeed in restarting the application
    -   the app using tsc-watch will throw "Error: listen EADDRINUSE: address already in use :::3000"
