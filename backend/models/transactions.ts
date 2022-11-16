'use strict';
import { Model, UUIDV4 } from 'sequelize'

interface TransactionsAttibutes {
  id: string;
  value: number;
  createdAt: string;
}

export default (sequelize: any, DataTypes: any) => {

  class Transactions extends Model<TransactionsAttibutes> implements TransactionsAttibutes {
    id!: string;
    value!: number;
    createdAt!: string;

    static associate(models: any) {
      // define association here
      Transactions.belongsTo(models.Accounts)
      Transactions.belongsTo(models.Users)
    }
  }
  Transactions.init({
    id: {
      type: DataTypes.STRING,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};