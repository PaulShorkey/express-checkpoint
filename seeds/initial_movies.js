// seeds/initial_movies.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Midnight in Paris',  'runtime': 96, release_year: 2011, 'director':'Woody Allen'},
        {id: 2, title: 'Titanic',  'runtime': 210, release_year: 1997, 'director':'James Cameron'},
        {id: 3, title: 'Midnight Pris',  'runtime': 96, release_year: 2011, 'director':'Woody Allen'}
      ]);
    });
};