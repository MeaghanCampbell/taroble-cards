// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        readings: [Reading]
    }

    type Reading {
        _id: ID
        date: String
        past: Card
        present: Card
        future: Card
    }

    type Card {
        _id: ID
        image: String
        name: String
        pastText: String
        presentText: String
        futureText: String
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReading(pastText: String, presentText: String, futureText: String): Card
    }
`;

// export the typeDefs
module.exports = typeDefs;