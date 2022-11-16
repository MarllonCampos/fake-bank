'use strict';


import { Model, UUIDV4 } from 'sequelize'
import Accounts from './accounts';

interface UsersAttributes {
  id: string;
  username: string;
  password: string;
}
export default (sequelize: any, DataTypes: any) => {
  class Users extends Model<UsersAttributes> implements UsersAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    username!: string;
    password!: string;
    static associate(models: any) {
      // define association here
      Users.hasOne(models.Accounts)
    }
  }
  Users.init({
    id: {
      type: DataTypes.STRING,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};