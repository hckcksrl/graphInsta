import Sequelize from "sequelize"

export const sequelize = new Sequelize({
    database: 'hckgram',
    username: 'graphql',
    password: '1111',
    dialect: 'postgres'
  });


