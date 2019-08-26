/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  console.log('holaaaaaaaaaaa');
  Movie.find({})
    .then((theMovies) => {
      console.log(theMovies);
      res.render('movies/index', { theMovies });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => { 
  const { id } = req.params;
  Movie.findById({ _id: id })
    .then((aMovie) => {
      res.render('movies/show', aMovie);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
