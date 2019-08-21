/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, default: 'unkown' },
  catchPhrase: { type: String, default: 'life is life' },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;
