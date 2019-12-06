import pg  from 'pg';
//import { client } from './database';

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'broadcaster_db',
    password: '1994',
    port: 5432,
})

client.connect();

const values = client.query(
    `INSERT INTO incidents(title, comment, location, images, videos, type, status, created_on, created_by) 
            values($1, $2, $3, $4, $5, $6, 'pending', $7, $8) RETURNING *;`
)

export default values;