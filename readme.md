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

 > Recognize and continue to remind yourself that there are only 2 actors from here forward: 1. `a Client` & 2. `a GraphQL Server`. So as we define a `Schema` realize that we are defining a preconditioned response from the server for any call coming from the client. 

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

4. In the _server.js_ file, we will create a variable called `typeDefs`, short for _Type Definitions_. Here we will use a special language called, _GraphQL Schema Definition Language (SDL)_, to create our Type Definitions. It is much like defining classes, but instead of utilizing the _class_ keyword, we are using _type_. 

So in this example we are defining a _type_ of _Query_. Make note of the _template literal_ back-tick marks used for the sake of creating a multi-line definition. Inside the curly brackets we define the _fields_ that belong to this _Type_. 

```javascript
const typeDefs = `
    type Query{
        greeting: String
    }
`;
```

> _This Code Reads Like ..._: a client may issue a query to the GraphQL Server. When the GraphQL server receives this request it is to return a String, called "Greeting". This definition is known as a _Schema_.

5. The schema that we just defined needs to be parsed by the GraphQL server. The GraphQL server doesn't intrinsically know how to do this, so we need to import function _gql_ from the `apollo-server` module to do this. The _gql_ is a `tag function` which allows us to _tag_ a template literal -- place the _gql_ tag in front our our template literal quotes.  

```javascript
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        greeting: String
    }
`;
```

> Note that the `gql` tag, parses the _template literal_ into the GraphQL, creating an Object known as a `DocumentNode`. You can validate this by adding a `console.log(typeDefs)`, and running the `server.js` file. Doing so will produce a result like the following in the console: 

```javascript
// Add a console.log() to the server.js file
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        greeting: String
    }
`;

console.log(typeDefs)
```

```s
# Run the server.js file
node server.js
```

```javascript
{
  kind: 'Document',
  definitions: [
    {
      kind: 'ObjectTypeDefinition',
      description: undefined,
      name: [Object],
      interfaces: [],
      directives: [],
      fields: [Array]
    }
  ],
  loc: { start: 0, end: 48 }
}
```

> The above is an Abstract Syntax Tree of the GraphQL code we wrote. This shows that the _template literal_ string has been parsed by the gql function and returned a _ObjectTypeDefinition_ (aka Schema) that GraphQL Server will use to respond to query requests. 

> NOTE: You can now comment out or remove the `console.log()` from the schema definition.

## Defining a Resolver 

So the schema will define __What__ needs to be returned when a Query is made by a client to the GraphQL server, but what about the __HOW__ (aka the implementation)? How will the query execute? This question is answered with a _Resolver Function_. 

1. Within the _server.js_ file, lets create our _resolver function_. Start by definiing an Object literal called `resolvers`

```javascript
const resolvers = {

}
```

2. This `resolvers` Object needs to match out Type Defiinition, therefore we need a property called _Query_. _Query_ will be a nested Object, because it represents a _Type_. The _Query_ Object will also have a property called _greeting_ just like the field we declared in the _typeDefs_. 

Here _greeting_ will be assigned to a function, that will be the implementation for any query request to the GraphQL server. In this case _greeting_ returns a String literal. 

```javascript 
const resolvers = {
    Query: {
        greeting: () => 'Hello from the GraphQL Server'
    }
}
```

> _This Code Reads Like ..._: Everytime a client makes a _Query_ to the GraphQL server, a reference to the greeting schema will be implemented via a _resolver function_ which returns a string. 

