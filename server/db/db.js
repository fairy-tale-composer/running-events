const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST | 'localhost',
  port: process.env.DB_PORT | 5432,
  database: process.env.DB_DATABASE | 'running_events'
});

module.exports = pool;
