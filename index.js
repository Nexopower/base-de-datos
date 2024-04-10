import app from './app.js'
import sequelize from './src/database/database.js'

import './src/app/models/alergia.model.js'

async function main() {
  try {
    await sequelize.sync({ alter: true, force: false })
    app.listen(3000);
  } catch (error) {
    console.error(error)
  }
}

main();