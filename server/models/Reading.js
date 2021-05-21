const { Schema, model } = require('mongoose')
const cardSchema = require('./Card')
const dateFormat = require('../utils/dateFormat')

const readingSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        past: {
            type: cardSchema
        },
        present: {
            type: cardSchema
        },
        future: {
            type: cardSchema
        },
    }
)

const Reading = model('Reading', readingSchema)

module.exports = Reading