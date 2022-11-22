import sequelize, { DataTypes, Model, UUIDV4 } from 'sequelize'
import sequelizeConnection from '../config/config';


interface AccountsAttibutes {
  id?: string;
  balance: number;
}
interface TransactionsAttibutes {
  id?: string;
  value: number;
  createdAt?: Date;
  debitedAccountId: string;
  creditedAccountId: string;

}

interface UserAttributes {
  id?: string;
  username: string;
  password: string;
  accountId: string
}

class Accounts extends Model<AccountsAttibutes> implements AccountsAttibutes {
  public id?: string;
  public balance!: number;
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
  sequelize: sequelizeConnection,
  modelName: 'Accounts',
});

class Users extends Model<UserAttributes> implements UserAttributes {
  public id?: string;
  public username!: string;
  public password!: string;
  public accountId!: string

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
  accountId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Accounts,
      key: 'id'
    }
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'Users',
})


class Transactions extends Model<TransactionsAttibutes> implements TransactionsAttibutes {
  id?: string;
  value!: number;
  debitedAccountId!: string;
  creditedAccountId!: string;
  public readonly createdAt?: Date;

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
  },
  debitedAccountId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Accounts,
      key: 'id'
    }
  },
  creditedAccountId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Accounts,
      key: 'id'
    }
  }
}, {
  sequelize: sequelizeConnection,
  modelName: 'Transactions',
});


Accounts.hasOne(Users, { foreignKey: 'accountId' })
Accounts.hasMany(Transactions, { foreignKey: 'debitedAccountId', as: "credited" })
Accounts.hasMany(Transactions, { foreignKey: 'creditedAccountId', as: 'debited' })




Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccountId', as: "credited" })
Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccountId', as: "debited" })




Users.belongsTo(Accounts, { foreignKey: 'accountId' })


export { Accounts, Transactions, Users }