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

module.exports = router;