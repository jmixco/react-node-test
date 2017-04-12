const config = require('../config');
const db = config.db;
const Sequelize = require('sequelize');


let sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: 'mysql',//|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    //storage: 'path/to/database.sqlite'
});


/*User.findOne().then(function (user) {
    console.log(user.get({ plain: true }));
});*/
const userModel = require('./userModel')(sequelize);
const eventoModel = require('./eventoModel')(sequelize);


module.exports = {
    sequelize,
    userModel,
    eventoModel
};

/*

const mysql = require('mysql');
let connection = mysql.createConnection(config.db);

connection.connect();

connection.query('SELECT * from usuario', function (err, rows, fields) {
    if (!err) {
        //console.log('rows: ', rows);
        //console.log('fields: ', fields);
        rows.forEach(function (element, index, arr) {
            console.log(element.nombre);
        });
    } else
        console.log('Error while performing Query.', err);
});

connection.end();

module.exports = connection;

*/