const Sequelize = require('sequelize');
const eventoModel = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    fecha: {
        type: Sequelize.DATE
    }
};
module.exports = (sequelize) => {
    const Event = sequelize.define('evento', eventoModel, {
        freezeTableName: true, // Model tableName will be the same as the model name
        createdAt: false,
        updatedAt: false
    });

    return Event;
};