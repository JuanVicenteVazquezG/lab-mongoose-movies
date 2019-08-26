/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const Movie = require('../models/movie');

const dbName = 'movie-project';

mongoose.connect(`mongodb://localhost/${dbName}`);

const movie = [{
  title: 'Terminator',
  genre: 'Science Fiction',
  plot: 'A seemingly indestructible robot is sent from 2029 to 1984 to assassinate a young waitress, whose unborn son will lead humanity in a war against sentient machines, while a human soldier from the same war is sent to protect her at all costs.',
},
{
  title: 'Matrix',
  genre: 'Science Fiction',
  plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
},
{
  title: 'gone with the wind',
  genre: 'Literary',
  plot: 'A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.',
}];

Movie.create(movie, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${movie.length} movies`);
  mongoose.connection.close();
});
