const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:search', (req,res) => {
    let search = req.params.search;
    console.log('IN search router, searching for:', search);

    const sqlQuery = `SELECT * FROM movies m
                        WHERE UPPER ("title") LIKE UPPER('%' || $1 || '%');`;
    pool.query(sqlQuery, [search])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log(`IN search router, error making search ${search}: ${err}`);
            res.sendStatus(500);
        })
})

module.exports = router;