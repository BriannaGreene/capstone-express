// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/capstone_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
