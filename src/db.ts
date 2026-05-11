import mysql from 'mysql2/promise';

const pool=mysql.createPool({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"tsdb"
});

export default pool;





