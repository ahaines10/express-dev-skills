const skills = [
  { id: 125223, skill: "java script", done: true },
  { id: 127904, skill: "html", done: false },
  { id: 139608, skill: "css", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}
