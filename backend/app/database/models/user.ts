const { Sequelize, DataTypes } = require('sequelize');
import SequelizeDatabase from '../index'
import Account from './account';

const User = SequelizeDatabase.define('User', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  accountId: {
    type: DataTypes.BIGINT,
    references: {
      model: Account,
      key: 'id'
    }
  }

}, { freezeTableName: true, tableName: 'User', timestamps: false, })

User.sync({force: true})

export default User

// const { Sequelize, DataTypes } = require('sequelize');
// import { Model, Optional } from 'sequelize';
// import SequelizeDatabase from '../index'
// import Account from './account';

// type UserAttributes = {
//   id: number;
//   username: string;
//   password: string;
//   accountId: number;
// }

// type UserCreationAttributes = Optional<UserAttributes, 'id'>

// class User extends Model<UserCreationAttributes>  {
//   declare id: number;
//   declare username: string;
//   declare password: string;
//   declare accountId: number;
  
// }

// User.init({
//   id: {
//     type: DataTypes.BIGINT,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//   },
//   password: {
//     type: DataTypes.STRING,
//   },
//   accountId: {
//     type: DataTypes.BIGINT,
//     references: {
//       model: Account,
//       key: 'id'
//     }
//   }

// }, {
//   modelName: 'User',
//   sequelize: SequelizeDatabase
// })
// export default User