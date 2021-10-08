const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query{
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello from GraphQL Server.'
    }
}

console.log(typeDefs)