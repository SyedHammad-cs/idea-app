const express = require("express");
const route = express.Router();
const ideasController = require("../controllers/idea.controller")

route.get("/ideas", ideasController.getAllIdeas);

route.get("/ideas/:id", ideasController.getIdeaById);

route.post("/ideas", ideasController.createIdea);

route.put("/ideas/:id", ideasController.updateIdea);

route.delete("/ideas/:id", ideasController.deleteIdea);

module.exports = route;
