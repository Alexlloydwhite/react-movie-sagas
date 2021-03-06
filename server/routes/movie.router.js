const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

router.get('/:id', (req, res) => {
  let movieId = req.params.id;
  console.log(`in get movie by ID router. ID is ${movieId}`);

  const sqlQuery = `SELECT * FROM movies m
                      WHERE m.id=$1;`;
  pool.query(sqlQuery, [movieId])
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`error making SQL query ${sqlQuery}:`, err);
      res.sendStatus(500);
    })
});

router.put('/:id', (req,res) => {
  const id = req.params.id;
  const title = req.body.title;
  const desc = req.body.description;
  console.log(`IN edit movie by ID. ID is ${id}`);
  let sqlQuery = `UPDATE "movies" SET title=$2, description=$3 WHERE id=$1;`;
  pool.query(sqlQuery, [id, title, desc])
    .then(response => {
      res.send(response.rows)
    }) 
    .catch(err => {
      console.log(`error making put request for ${id}: ${err}`);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
    .then(result => {
      console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      console.log(createdMovieId, req.body.genre_id);

      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        console.log(createdMovieId, req.body.genre_id);
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

      // Catch for first query
    }).catch(err => {
      console.log(err);
      res.sendStatus(500)
    })
})

module.exports = router;