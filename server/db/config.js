// create connection to db
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://ovhfyqtd:6XiTWR4GvSm90QytMGjtRNvDFx5LPoEA@stampy.db.elephantsql.com:5432/ovhfyqtd', {
  dialect: 'postgres',
});
console.log('Connected to remote db');

module.exports = db;
