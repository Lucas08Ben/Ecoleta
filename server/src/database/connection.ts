import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'lucas',
        password : 'limbo33',
        database : 'ecoleta'
      },
    searchPath: ['knex', 'public'],
    useNullAsDefault: true
})

export default connection;