
module.exports =
async function getTasks(req, res) {
  try {
    let tasks = [
      {id:1, name:'Install NodeJS', status:'COMPLETED', createdBy:1},
      {id:2, name:'Install Postman', status:'COMPLETED', createdBy:2}];
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
