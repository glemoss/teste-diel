import { Pool } from 'pg';

const pool = new Pool({
    user: 'db',
    host: 'localhost',
    database: 'tasksdb',
    password: 'dbpassword',
    port: 5432,
});

export default pool;
