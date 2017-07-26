const Sequelize = require('sequelize');
const db = require('./config');
// create some models
const List = db.define('list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Entry = db.define('entry', {
  errand: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});
// create some relationships
// List.hasMany(Entry, { foreignKey:{ name: 'list_id', allowNull: true }, onDelete: 'CASCADE' });
// Entry.belongsTo(List, { foreignKey:{ name: 'list_id', allowNull: true }, onDelete: 'CASCADE' });
// sync up database
// db.query('SET FOREIGN_KEY_CHECKS=0');
List.sync();
Entry.sync();
// db.query('SET FOREIGN_KEY_CHECKS=1');
// export
module.exports = {
  List,
  Entry
}
