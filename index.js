const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require("./schema/type-defs.js");
const { resolvers } = require("./schema/resolvers.js")


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: 3001 }).then(({ url }) => {
    console.log(`Your API is running at ${url}`);
})



