const express = require('express');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import authMiddleware from utils
const { authMiddleware } = require('./utils/auth');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

// import the database connection
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const path = require('path');

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // This ensures that every request performs an authentication check, and the updated request object will be passed to the resolvers as the context
    context: authMiddleware
});

// integrate our apollo server with the Express application middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// upon a successful connection, we start the server.
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
