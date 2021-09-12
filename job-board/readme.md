# Job Board Project

## Errors 

- [ ] Error 1

```
gabrielrodriguez@Gabriels-MacBook-Pro server % npm run start

> start
> nodemon --ext js,graphql --ignore data/ server.js

[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,graphql
[nodemon] starting `node server.js`
/Users/gabrielrodriguez/Desktop/Dev/GraphQL/job-board/server/node_modules/apollo-server-core/dist/ApolloServer.js:288
            throw new Error('You must `await server.start()` before calling `server.' +
            ^

Error: You must `await server.start()` before calling `server.applyMiddleware()`
    at ApolloServer.assertStarted (/Users/gabrielrodriguez/Desktop/Dev/GraphQL/job-board/server/node_modules/apollo-server-core/dist/ApolloServer.js:288:19)
    at ApolloServer.applyMiddleware (/Users/gabrielrodriguez/Desktop/Dev/GraphQL/job-board/server/node_modules/apollo-server-express/dist/ApolloServer.js:18:14)
    at Object.<anonymous> (/Users/gabrielrodriguez/Desktop/Dev/GraphQL/job-board/server/server.js:23:14)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47
[nodemon] app crashed - waiting for file changes before starting...
```

> Resolution found in this StackOverflow Article [here](https://stackoverflow.com/questions/68354656/unhandledpromiserejectionwarning-error-you-must-await-server-start-before)