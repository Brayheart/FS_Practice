const db = require('../db');

module.exports = {
  fetchEntry: (req, res) => {
    db.Entry.findAll({})
      .then(data => {
        res.status(200).send(data);
        console.log('Successfully fetched all entries');
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in fetching entries');
      })
  },
  createEntry: (req, res) => {
    console.log('this is the rquest in createEntry ', req.body)
    db.Entry.findOrCreate({
      where: {
        errand: req.body.errand
      }
    })
      .spread((newEntry, created) => {
        if (created) {
          res.status(200).send(newEntry);
          console.log('Successfully created all Entries');
        } else {
          res.status(500).send('Entry already exists');
          console.log('Entry already exists');
        }
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('Error in creating Entries');
      })
  }
}
