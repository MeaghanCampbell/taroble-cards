const { Schema } = require('mongoose')

const cardSchema = new Schema(
    {
      image: {
        type: String,
      },
      pastText: {
        type: String,
        minlength: 1
      },
      presentText: {
        type: String,
        minlength: 1
      },
      futureText: {
        type: String,
        minlength: 1
      }  
    }
)

module.exports = cardSchema