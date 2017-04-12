const Sequelize = require('sequelize');
const userModel = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        field: 'nombre' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    usuario: {
        type: Sequelize.STRING,
        unique: true
    }
    ,
    password: {
        type: Sequelize.STRING
    }
};
module.exports = (sequelize) => {
    const User = sequelize.define('usuario', userModel, {
        freezeTableName: true, // Model tableName will be the same as the model name
        instanceMethods: {
            comparePassword: function (password) {
                let ownpass = this.password;
                return Promise.resolve(ownpass === password);
            }
        }
    });

    return User;
};