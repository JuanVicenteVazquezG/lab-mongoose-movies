/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const Movie = require('../models/movie.js');


router.get('/new', (req, res, next) => {
  res.render('movies/new');
});

router.post('/', (req, res, next) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then((aMovie) => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(`error ${error}`);
      res.render('movies/new');
    });
});

router.get('/', (req, res, next) => {
  Movie.find({})
    .then((theMovies) => {
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

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');
      console.log('Movie Removed');
    })
    .catch((error) => { next(error); });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findOne({ _id: id })
    .then((aMovie) => {
      console.log(`Movie finded ${aMovie}`);
      res.render('movies/edit', aMovie);
    })
    .catch((error) => { next(error); });
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, genre, plot } = req.body;
  Movie.update({ _id: id }, { $set: { title, genre, plot } })
    .then((aMovie) => {
      res.redirect(id);
    })
    .catch((error) => { next(error); });
});

module.exports = router;
