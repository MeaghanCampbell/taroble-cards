const mongoose = require('mongoose');

// enter desired <remote env variable name> || <local database name> here
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/taroble-cards', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;