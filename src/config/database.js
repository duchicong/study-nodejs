const { Sequelize } = require('sequelize');
const env = require('./env');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DIALECT,
  port: env.DB_PORT,
  logging: false,
  raw: true
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = connectDB;
