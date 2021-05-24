const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const readingSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        readingData: {
            type: Object,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const Reading = model('Reading', readingSchema)

module.exports = Reading