import { Sequelize } from "sequelize";
import { conf } from "./conf.js";

// Create a new Sequelize instance
const sequelize = new Sequelize(conf.db, conf.user, conf.password, {
    host: conf.host,
    dialect: conf.dialect,
    port: conf.port,
    pool: {
        max: conf.pool.max,
        min: conf.pool.min,
        acquire: conf.pool.acquire,
        idle: conf.pool.idle
    }
});


export default sequelize