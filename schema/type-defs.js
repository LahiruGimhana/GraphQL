const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        favoriteMovies: [Movie]
    }

    type Query {
        users: [User]!
        user(id: ID!): User!
    }

    type Movie {
        id: ID!
        name: String!
        yeatr: Int!
        isInTheater: Boolean!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int =18
        nationality: String!
    }

    type Mutation {
        createUser(input: CreateUserInput!) : User!
    }
`

module.exports = { typeDefs };