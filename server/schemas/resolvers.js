// import models
const { User, Reading, Card } = require('../models');

// error handling
const { AuthenticationError } = require('apollo-server-express');

// import the token function from utils
const { signToken } = require('../utils/auth');

// just a simple object called resolvers with a Query and Mutation nested object that holds a series of methods. These methods get
// the same name of the query or mutation they are resolvers for. We don't have to worry about error handling here
// because Apollo can infer if something goes wrong and will respond for us.
const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
        },
        // get a user by username
        user: async (parent, {username}) => {
            return User.findOne({username})
                .select('-__v -password')
                .populate('friends')
        },

        // read request header for jwt
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        // creates a user and issues them a token
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // create the token
            const token = signToken(user);

            return { token, user };
        },
        // verifies user exits and issues them a token
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            // create the token
            const token = signToken(user);
            return { token, user };
        },
        // add reading
        addReading: async (parent, args, context) => {
            if (context.user) {
                const reading = await Reading.create({ ...args, username: context.user.username })

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { readings: reading._id} },
                    { new: true }
                )
                return reading;
            }
            throw new AuthenticationError('You need to be logged in to save your reading!');
        }
    }
};

module.exports = resolvers;