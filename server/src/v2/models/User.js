
//import { client } from './database'; 
import pg from 'pg'; 
import format from 'pg-format';

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'broadcaster_db',
    password: '1994',
    port: 5432,
})

client.connect(); 


class User {

    async create(data) {
        const res = await client.query(
            `INSERT INTO users(firstname, lastname, email, password, phone_number, role, created_on) values($1, $2, $3, $4, $5, 'user', $6) RETURNING *;`, 
            [data.firstname, data.lastname, data.email, data.password, data.phone_number, new Date()]
        )
        return res.rows[0];
    }

    async findOne(key, value) {
        const sql = format('SELECT * FROM users WHERE %I = $1', key);
        const res = await client.query(sql, [value]);
        return res.rows[0];
    }

    async checkForPropertyExistence(key, value) {
        const sql = format('SELECT count(*) FROM users WHERE %I = $1', key);
        const res = await client.query(sql, [value]);
        const count = parseInt(res.rows[0].count);
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }
}
export default new User();