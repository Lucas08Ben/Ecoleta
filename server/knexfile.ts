import path from 'path';

module.exports = {
  client: 'pg',
  connection: {
      host : '127.0.0.1',
      user : 'lucas',
      password : 'limbo33',
      database : 'ecoleta'
    },
  migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }, 
  useNullAsDefault: true
};