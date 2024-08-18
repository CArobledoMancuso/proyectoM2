const express = require('express');
const router = express.Router();
const movieController = require('../controllers/createMovieControler');
const validateMovie = require ('../middleware/validateMovie.js');

router.post('/', validateMovie ,movieController.createMovie);

module.exports = router;
