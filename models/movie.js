/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, default: 'unkown' },
  plot: { type: String, default: 'life is life' },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
