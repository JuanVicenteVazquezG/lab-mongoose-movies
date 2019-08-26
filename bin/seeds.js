/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

const dbName = 'celebrity-project';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrity = [{
  name: 'Tom Cruise',
  occupation: 'Actor',
  catchPhrase: 'I feel the need - the need for speed',
},
{
  name: 'arnold schwarzenegger',
  occupation: 'Action Actor',
  catchPhrase: 'Sayonara baby',
},
{
  name: 'Marilyn Manson',
  occupation: 'Singer',
  catchPhrase: 'I fear being like everyone I hate, I fear failure, I fear losing control. I love balancing between chaos and control with everything I do. I always have a fear of going one way or another, getting lost in something, or losing everything to get lost in',
}];

Celebrity.create(celebrity, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrity.length} celebrities`);
  mongoose.connection.close();
});
