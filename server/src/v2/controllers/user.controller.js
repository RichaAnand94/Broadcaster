import Pool from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: '1994',
    port: '5432',
})