// Require dotenv
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      // host: process.env.DB_HOST,
      host: '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};
