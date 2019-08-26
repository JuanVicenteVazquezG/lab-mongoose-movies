/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const Celebrity = require('../models/celebrity.js');

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  const { name, occupation, cathphrase } = req.body;
  const newCelebrity = new Celebrity({ name, occupation, cathphrase });
  newCelebrity.save()
    .then((aCelebrity) => {
      res.redirect('/celebrities');
    })
    .catch((error) => {
      console.log('error');
      res.render('celebrities/new');
    });
});


router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((theCelebrities) => {
      res.render('celebrities', { theCelebrities });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findById(id)
    .then((aCelebrity) => {
      res.render('celebrities/show', aCelebrity);
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/celebrities');
      console.log('Celebrity Removed');
    })
    .catch((error) => { next(error); });
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Celebrity.findOne({ _id: id })
    .then((aCelebrity) => {
      console.log('por fin hemos entrado');
      res.render('celebrities/edit', aCelebrity);
    })
    .catch((error) => { next(error); });
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, cathPhrase } = req.body;
  Celebrity.findByIdAndUpdate({ _id: id }, { name, occupation, cathPhrase })
    .then(() => {
      res.redirect('/celebrities');
    })
    .catch((error) => { next(error); });
});

module.exports = router;
