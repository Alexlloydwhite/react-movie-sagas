const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:search', (req,res) => {
    let search = req.params.search;
    console.log('IN search router, searching for:', search);
})

module.exports = router;