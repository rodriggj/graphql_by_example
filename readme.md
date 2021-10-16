# GraphQL 

## What is GraphQL 
Graphql is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of your data in your API, gives the client the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables the power of developer tools.

## Why do you need GraphQL vs some alternative?

>**RESTful Routing**
>Given a collection of records on a server, there should be a uniform URL & HTTP request method used to utilize that collection of records.

Single RESTful resource
<p align="center">
    <img src="https://user-images.githubusercontent.com/8760590/137595313-83c34cc6-df70-4ee2-8c64-cb5fd185b675.png" width="450"/>
</p>

Nested RESTful resources
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137595391-59d1c5c2-8964-498d-bc3d-f84399955782.png" width="450"/></p>

>**So what's the problem?**
>The complexity of mapping/rendering relational data is increasing - `client-side JOINs`

>**Consider the following example...**
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137595535-c5eff693-b566-42f0-8742-a37bd1018663.png" width="450"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137595687-8c3a4e8e-dca0-4fe2-b33a-24d7f40d83a0.png" width="450"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137595912-5e7e41ef-3e86-464e-a136-cd226415744c.png" width="450"/></p>

>**Challenge...**
> Use the RESTful convention, and write a an endpoint that will fetch the data needed to mimic the `User / Friend / Company / Position` relationship required for my front-end.
> Requirements: 
> 1. ensure to use RESTful conventions, 
> 2. ensure the solution is scalable (reusable / not custom) 
> 3. supports developer-community / easily  consumable.

>**Observations...**

1. Further the nesting goes ... the harder the convention is to follow ... 

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137596575-d3c67d49-665d-46a4-8585-f978b8a4ae57.png" width="450"/></p>

2. Quantity of requests increases ... `IMPACT: COST`

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137596680-bffd97c1-e407-4e7b-ac10-1ee503e00f12.png" width="450"/></p>

3. Customized endpoints ... `IMPACT: Consumption / Documentation / Versioning / Maintanence`
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137596751-1ff5d926-7825-49b4-b2a8-bf4f1394f387.png" width="450"/></p>

4. Break RESTful conventions ... `IMPACT: Why are you using REST?`
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137596921-2cc70f5e-85a2-4802-8e0f-ad31fad708f9.png" width="450"/></p>

5. Overfetching data ... `IMPACT: Network, Security, Compliance, ETL, etc.`
<p align="center"><img src="https://user-images.githubusercontent.com/8760590/137597001-93e69bf8-0b0d-40de-9629-6750d774b781.png" width="450"/></p>

>**So why do you need GraphQL**

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

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/136486908-18cb9b54-2bb7-4f73-9ff7-8c227c956b23.png" width="450"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/136487258-1c852534-8c1b-4129-9a14-78d944d6adea.png" width="450"/></p>

## Creating a Server

1. Now that we've defined a _schema_ and created an implementation method, our _resolver_ we now need some service to handle running this code, our _server_. 

To instantiate our _server_ there are a few things we need to do. The first is to import, the _ApolloServer_ class available to us from the _apollo-server_ module we installed. We have already used the `gql` tag function from this module, so we simply need to edit the existing _require_ statement at the top of our file. 

```javascript
// Was 
const { gql } = require('apollo-server')

// Update to ...
const { ApolloServer, gql } = require('apollo-server')
```

2. We now need to utilize this _ApolloServer_ class to create our server. First, lets assign our new Class to a variable, _server_. Our _ApolloServer_ class utilizes a constructor, where in the parameters it is expecting an Object, where you can pass configuration properties. Here we will pass our Object, our _typeDefs_ & our _resolvers_. 

```javascript
const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers })

// Because the property names match our value names, in javascript we can use short-hand and simply write the following: 
const server = new ApolloServer({ typeDefs, resolvers })
```

3. Finally, we can call the _listen()_ method on our _server_ variable, and explicitly set the listening port to _9000_. The _listen_ method will return a _Promise_, so we can chain onto our Promise a _.then()_ function which will take _serverInfo_ as an arguement and log a message to the console, via a callback method. 

```javascript 
server.listen({port:9000})
    .then((serverInfo) => console.log(`Server Running at: ${serverInfo.url}`))

// Again using a short-hand notation we can use descructuring to simply pull back the url info 
server.listen({port:9000})
    .then(({url})=> console.log(`Server Running at: ${url}`))
```

4. Finally we can run our server using Nodejs on our _server.js_ file. In the console you should see the url that will allow you to access your content in a browser. If you go to this url, you should see a view similiar to the one presented below. 

```javscript 
node server.js
```

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/136555362-eb4f4a4b-a66e-403a-b386-b5f484f5bca7.png" width="450"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/8760590/136556717-42f79b80-93de-4dea-9e4a-ce5848d5f050.png" width="450"/></p>
