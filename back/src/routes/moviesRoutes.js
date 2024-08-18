const { Router } = require("express");
const moviesRouter = Router();
const { moviesController } = require("../controllers/controllers.js");

moviesRouter.get("/", moviesController);


module.exports = moviesRouter;
