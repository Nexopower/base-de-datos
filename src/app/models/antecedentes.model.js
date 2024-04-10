import { DataTypes } from 'sequelize';

import sequelize from '../../database/database.js';

export const Alergia = sequelize.define("antecedentes", {
    antecedentes_id: {
        type: DataTypes.INTEGER
    },
    paciente_id: {
        type: DataTypes.INTEGER,
    },
    diagnostico_id:{
        type: DataTypes.STRING,
    },
    procedencia:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    alergia_id: {
        type: DataTypes.INTEGER,
    }

});