// app.js
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV]);

app.use(express.json());

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/movies/:id', function(req, res) {
  const id = +req.params.id;
  if(isNaN(id)) {
    res.status(400).json({
     message:
       'Invalid ID supplied'
   });
  } else {
    knex
    .select('*')
    .from('movies')
    .where('id', id)
    .then(data => {
       console.log(data);
       if(data.length) {
         return res.status(200).json(data)
       } else {
         return res.status(404).json({
         message:
           'Movie ID not found'
         })
       } 
    })
  }
    
})

app.post('/movies', function(req, res) {
    console.log(req.body);
    // knex
    // .insert()
})

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});