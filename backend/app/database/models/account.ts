const { Sequelize, DataTypes } = require('sequelize');
import SequelizeDatabase from '../index'

const Account = SequelizeDatabase.define('Account', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 100,
  },


}, { freezeTableName: true, tableName: 'Account', timestamps: false, })

Account.sync({ force: true })

export default Account