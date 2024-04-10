import { DataTypes } from 'sequelize';

import sequelize from '../../database/database.js';

export const Alergia = sequelize.define("alergia", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
    }
});