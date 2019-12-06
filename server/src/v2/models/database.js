
import pg from 'pg';

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'broadcaster_db',
    password: '1994',
    port: 5432,
})

client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected to the database')
    }
});

client.query(
    `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY, 
        firstName VARCHAR(40) not null, 
        lastName VARCHAR(40) not null, 
        email VARCHAR(40) not null, 
        password VARCHAR(40) not null, 
        phone_number VARCHAR(15) not null, 
        role VARCHAR(10) not null, 
        created_on timestamp);

        CREATE TABLE IF NOT EXISTS incidents 
        (id SERIAL PRIMARY KEY,
         title VARCHAR(40) not null, 
         comment VARCHAR(250), 
         location VARCHAR(40),
         images VARCHAR[], 
         videos VARCHAR[], 
         status VARCHAR(40), 
         type VARCHAR(20) not null, 
         created_on timestamp, 
         created_by integer);`
);
/*client.query(
    `INSERT INTO users(firstname, lastname, email, password, phone_number, role, created_on) 
     values('admin', 'admin', 'admin@broadcaster.com', 'admin', '9876543210', 'admin', $1);`,[new Date()]
)
*/

// export default client;