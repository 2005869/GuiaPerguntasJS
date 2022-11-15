const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'mysql_password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;