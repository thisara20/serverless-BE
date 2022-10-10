import mysql from "mysql2";
import { dbConfig } from "../configs/db.config";

const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

const userModel = {
  isExistingUser: async (email) => {
    const query = "SELECT * FROM user WHERE email=?";
    const values = [email];
    const [row] = await promisePool.execute(query, values);
    return [row];
  },

  signup: async (email, name, hash) => {
    const query = "INSERT INTO user (email, name, password) VALUES (?,?,?)";
    const values = [email, name, hash];
    const [rows] = await promisePool.execute(query, values);
    return rows;
  },

  read: async () => {
    const query = "SELECT * FROM user";
    const [rows] = await promisePool.execute(query);
    return rows;
  },
  /*
  login: async (email, password) => {
    console.log("modelL");
     
     
    // Encryption of the string password
    const pw = await bcrypt.hash(password, 10);
    console.log("hash passwd",pw);
     
    if(pw){
      const validate = await bcrypt.compare(password, pw);
      if (!validate) {
        return false;
      }
      console.log("validate", validate);
      return true;
    } 
     
  },

 */

  /*
  login: async (email,password) => {
    const [row] = await promisePool.execute(
      "SELECT password FROM user WHERE email=?",
      [email]
    );
    if (row.length ) { 
       
      console.log("Pd", row[0].password);
      const  hashedPassword  = row[0].password ;
      console.log("upd",password);
      console.log("hpd",hashedPassword);

       
        const validate = await bcrypt.compare(password, hashedPassword);
        if (!validate) {
          return false;
        }else{
          const query = "SELECT * FROM user where email=? and password=?";
        const values=[email, password];
        const [rows] = await promisePool.execute(query,values);
        return rows;
        }
         
     
   // const validPassword = await bcrypt.compare(password, hashedPassword );
   /*
     bcrypt.compare(password,hashedPassword, async function (err,ismatch){
      
      if(ismatch){
        console.log("2Pd", ismatch);
        console.log("enPd", password);
        
        const query = "SELECT * FROM user where email=? and password=?";
        const values=[email, password];
        const [rows] = await promisePool.execute(query,values);
        return rows;
      }else  console.log("Incorrect password");
     })
     
  }
  }, 
  */
};
/*
 
  var sql = 'CREATE TABLE IF NOT EXISTS user (user_id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(35), email VARCHAR(255) NOT NULL, password VARCHAR(100))';  
  pool.query(sql, function (err, result) {  
  if (err) throw err;  
  console.log("Table created");  
  });  
 
 
let sql= `SELECT * FROM user where email='abc' and password='abc' `;
connection.execute(sql, function(err,result){
  if(err) console.log(err);
  console.log(result);
})

*/

export { userModel };
