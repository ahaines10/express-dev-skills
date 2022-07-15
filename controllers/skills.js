const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
};

function index(req, res) {
  // Obtain the array of todos from the Todo model
  const skills = Skill.getAll();
  res.render("skills/index", { skills });
}

function show(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skills/show", { skill });
}

function newSkill(req, res) {
  // render the new.ejs that contains a form
  res.render("skills/new");
}

function create(req, res) {
  // The model is responsible for CRUD
  console.log("req.body", req.body);
  Skill.create(req.body);
  // If data is updated/added we need to redirect
  // Where we redirect to, is entirely up to you
  // what do want your app to do?
  res.redirect("/skills");
}
