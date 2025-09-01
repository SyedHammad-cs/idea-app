const ideas = require("../models/idea.model")

let id = Object.keys(ideas).length;

exports.getAllIdeas = (req, res) => {
    res.status(200).json(ideas);
};

exports.getIdeaById = (req, res) => {
    res.status(200).send(ideas[req.params.id]);
}

exports.createIdea = (req, res) => {
    id++;
    ideaObj = req.body;
    ideaObj["id"] = id;
    ideas[id] = ideaObj;
    res.status(201).send(ideaObj);
}

exports.updateIdea = (req, res) => {
    const id = req.params.id;

    const obj = req.body;
    ideas[id] = obj;
    res.status(201).send(obj);
}

exports.deleteIdea = (req,res)=>{
    const id = req.params.id;
    delete ideas[id];
    res.status(200).send(
        {
            message: "Deleted..."
        }
    );
}