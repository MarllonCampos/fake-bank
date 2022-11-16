'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import process from 'process';
const basename = path.basename(__filename);
import config from '../config/config'
const db: any = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);
fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(async (file: any) => {
    await import(path.join(__dirname, file)).then(model => {
      model.default(sequelize, DataTypes)
      db[model.name] = model;
    })
  });

Object.keys(db).forEach(modelName => {
  console.log('DOENST RUNS ASSOCIATE')
  if (db[modelName].associate) {
    console.log('RUNS ASSOCIATE')
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
