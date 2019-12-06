import pg  from 'pg';
import format from 'pg-format';
//import { values } from './insert.values'
//import { client } from './database';

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'broadcaster_db',
    password: '1994',
    port: 5432,
})

client.connect();

class Incident {

    async create(data) {
        const res = await client.query(
            `INSERT INTO incidents(title, comment, location, images, videos, type, status, created_on, created_by) 
            values($1, $2, $3, $4, $5, $6, 'pending', $7, $8) RETURNING *;`, 
            [data.title, data.comment, data.location, data.images, data.videos, data.type, new Date(), data.created_by]
        )
        return res.rows[0];
    }

    async findOne(key, value) {
        const sql = format('SELECT * FROM incidents WHERE %I = $1', key);
        const res = await client.query(sql, [value]);
        return res.rows[0];
    }   

    async findAll(type, created_by) {
        const sql = format('SELECT * FROM incidents WHERE type = $1 AND created_by = $2');
        const res = await client.query(sql, [type, created_by]);
        return res.rows;
    }

    async findAllByAdmin(type) {
        const sql = format('SELECT * FROM incidents WHERE type = $1');
        const res = await client.query(sql, [type]);
        return res.rows;
    }

    async update(id, key, value) {
        const sql = format('UPDATE incidents SET %I = $1 WHERE id = $2', key);
        const res = await client.query(sql, [value, id]);
        return res.rows[0];
    }

    async delete(id) {
        const sql = format('DELETE FROM incidents WHERE id = $1');
        const res = await client.query(sql, [id]);
        return res.rows[0];
    }
}
export default new Incident();