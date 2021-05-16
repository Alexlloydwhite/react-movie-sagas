const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // sql query to get list of genres
  const sqlQuery = `SELECT * FROM genres;`;

  pool.query(sqlQuery)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all Genres', err);
      res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
  console.log(`IN get genre by ID router: ID is ${req.params.id}`);
  // grab id from request params
  let movieId = req.params.id;
  // sql query to get all genres for a movie by ID
  const sqlQuery = `SELECT m.title, g.name FROM movies m
                      JOIN movies_genres mg ON m.id = mg.movie_id
                      JOIN genres g ON g.id = mg.id
                      WHERE m.id=$1;`
  pool.query(sqlQuery, [movieId])
    .then(result => {
      console.log('results from genre by id query:', result.rows);
      // send the results to client
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`error getting genres for movie with id ${movie.id}: ${err}`);
    })
})

module.exports = router;