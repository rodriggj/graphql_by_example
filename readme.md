# GraphQL 

## What is GraphQL 
Graphql is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of your data in your API, gives the client the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables the power of developer tools.

## Why do you need GraphQL vs some alternative?
1. You can query for exactly what you need (no Overfetching). 

    > The client (not the server) will dictate exactly what is needed in the API request.


2. Get many resources in a single request 

    > GraphQL not only access the properties of a resource, but also the references between them, without referencing multiple Endpoints or Requests.

3. Describe what is possible with a Type System
    > GraphQL APIs are developee with a Schema first approach; organized in terms of types and fields not endpoints. Apps can use types to avoid writing manual parsing code.

4. Powerful Developer Tools
    > Build/use tools like `Graphiql` to provide insight into the success of queries before implmented into code. 

5. Evolve your APIs witouth Versions
    > Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. By using a single evolving version of the GraphQL API, gives continous access to new features and maintainable code. 

6. Bring your own code
    > GraphQL is a layer that sits on top of your existing code. All your data and business logic can stay the same within your application. You provide functions for each field in they type system and GraphQL executes the query. Language agnostic - GraphQL is an Open Specification with implmentations in several languages.

## Dependencies

> The examples from this point forward will be implemented using Nodejs. You can use whatever runtime you would like, __you are not bound to Nodejs__, but if you want to follow the examples, you'll need the following dependencies. 

What you'll need to start...
+ A computer running Windows, Linux, or macOS
+ A web browser preferably Google Chrome 
+ Your favorite code editor. 
+ Installation of [NodeJs](https://nodejs.org/en/)

 ## Defining a Schema

1. Here we will create a project called `hello-world`. Open your code editor and in a terminal session initialize a NodeJs project with the following command: 

```javascript 
mkdir hello-world-server
cd hello-world-server
npm init
```

2. Initiallize the following package dependencies with the following command: 

```javascript 
npm install apollo-server graphql --save
```

3. Now the the directory structure is in place, a package.json file is created to manage dependencies, and our dependencies have been installed -- we will start our GraphQL process by defining a `Schema`. To do  this, create a new file called `server.js` and open this file in your code editor. 

```javascript 
code server.js
```

4. In the _server.js_ file, we will create a variable called `typeDefs`, short for _Type Definitions_. Here we will use a special language called, _GraphQL Schema Definition Language (SDL)_, to create our Type Definitions. It is much like defining classes, but instead of utilizing the _class_ keyword, we are using _type_. So in this example we are defining a _type_ of _Query_. Make note of the _template string literal_ single quote marks used for the sake of creating a multi-line definition. 

Inside the curly brackets we define the _fields_ that belong to this _Type_. 

```javascript
const typeDefs = `
    type Query{
        greeting: String
    }
`

> _This Code Reads Like ..._: a client may issue a request of Type _query_ to the GraphQL Server. When the GraphQL server receives this request it is to return a String, called "Greeting" as a response to this query. This definition is known as a _Schema_.
