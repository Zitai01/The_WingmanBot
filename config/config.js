require('dotenv').config()
module.exports = {
  development: {
    database: 'the_Wingmanbot_development',
    // "host": "127.0.0.1",
    dialect: 'postgres'
  },
  test: {
    database: 'the_Wingmanbot_test',
    //"host": "127.0.0.1",
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    //"host": "127.0.0.1",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
