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
  console.log(`la id es ${id}`);
  Celebrity.findById(id)
    .then((aCelebrity) => {
      res.render('celebrities/show', aCelebrity);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
