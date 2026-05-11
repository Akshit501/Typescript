import express from 'express';
import pool from './db';


const app=express();

app.use(express.json());

app.get('/', async (req, res) => {
  res.send("Mysql + Express + Typescript");
});



app.post("/user",async (req,res)=>{
  const {name,email}=req.body;

  const [result]=await pool.query(
    "INSERT INTO users (name,email) VALUES (? ,?)",
    [name,email]
  );

  res.send(result);



});

app.get('/users', async(req,res)=>{
  const [rows]=await pool.query(
    "SELECT * FROM USERS"
  );
  res.send(rows);
});


app.put("/user/:id",async(req,res)=>{
const {id}=req.params;
const {name}=req.body;


await pool.query(
  "UPDATE users SET name=? WHERE id=?",
  [name,id]
);
res.send("user updated successfully");

});


app.delete('/user/:id',async(req,res)=>{
  const {id}=req.params;

  await pool.query(
    "DELETE FROM users WHERE id=?",
    [id]
  );
  res.send("user deleted successfully");
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});