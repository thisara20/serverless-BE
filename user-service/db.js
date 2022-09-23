const mysql = require('mysql2'); 
require("dotenv").config(); 
 

  const connection = mysql.createConnection({
    host:process.env.DB_HOST, 
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
 
});
 
const connect = connection.connect(error =>{
  if(error) {
    throw new error
  }
  console.log("MYSQL connected")
})
 
/*
let sql= "SELECT * FROM user;";

connection.execute(sql, function(err,result){
  if(err) throw new Error;
  console.log(result);
})
 
insert 

let sql= `INSERT INTO user (email, name, password) VALUES  ('abqqc', ' aqbc', ' aqbc')`
connection.execute(sql, function(err,result){
  if(err) console.log(err);
  console.log(result);
})

 
let sql= `SELECT * FROM user where email='abc' and password='abc' `;
connection.execute(sql, function(err,result){
  if(err) console.log(err);
  console.log(result);
})

*/

module.exports =connection;
