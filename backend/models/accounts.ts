'use strict';
import { Model, UUIDV4 } from 'sequelize'

interface AccountsAttibutes {
  id: string;
  balance: number;
}
export default (sequelize: any, DataTypes: any) => {
  class Accounts extends Model<AccountsAttibutes> implements AccountsAttibutes {


    id!: string;
    balance!: number;
    static associate(models: any) {
      // define association here
      Accounts.hasOne(models.Users, { foreignKey: 'accountId' })
      Accounts.hasMany(models.Transactions, { foreignKey: 'debitedAccountId', as: "credited" })
      Accounts.hasMany(models.Transactions, { foreignKey: 'creditedAccountId', as: 'debited' })
    }

  }
  Accounts.init({
    id: {
      type: DataTypes.STRING,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};