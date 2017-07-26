const db = require('../db');

module.exports = {
  fetchLists: (req, res) => {
    db.List.findAll({})
      .then(data => {
        res.status(200).send(data);
        console.log('Successfully fetched all lists');
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in fetching lists');
      })
  },
  createList: (req, res) => {
    db.List.findOrCreate({
      where: {
        name: req.body.name
      }
    })
      .spread((newList, created) => {
        if (created) {
          res.status(200).send(newList);
          console.log('Successfully created all lists');
        } else {
          res.status(500).send('List already exists');
          console.log('List already exists');
        }
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in creating lists');
      })
  }
}
