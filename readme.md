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

What you'll need to start...
    + A computer running Windows, Linux, or macOS
    + A web browser preferably Google Chrome 
    + For NodeJs examples, a recent version of Node installation. 
    + Your favorite code editor. 
    + For examples using Apollo Server, you'll need to install the following dependency: 

 ```npm install apollo-server apollo-server-express graphql --save```

 ## Defining a Schema

 ### Serving over HTTP

