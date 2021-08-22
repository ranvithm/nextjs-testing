import Sequelize from 'sequelize'
import userModel from './user'

const sequelize = new Sequelize('InfoXD_1506', 'postgres', 'Gain@1234', {
    host: 'localhost',
    port: 4432,
    dialect: 'postgres',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = userModel(sequelize, Sequelize)

export default db