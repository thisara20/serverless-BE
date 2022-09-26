const mysql = require("mysql2");
const pool = require("./../../db");
//const bcrypt = require('bcrypt');

const DataHandler = {
  read: (event, context, callback) => {
    const query = "SELECT * FROM user";

    pool.execute(query, (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results);
      callback(null, results);
      // pool.releaseConnection();
    });
  },
};

const userHandler = {
  signup: (req, callback) => {
    var email = req.body.email;
    var name = req.body.name;
    var password = req.body.password;

    //const query = 'INSERT INTO user (email, name, password) VALUES ('?', ' ?', ' ?')', [email, name,password];

    pool.query(
      "INSERT INTO user (email, name, password) VALUES ? ? ?",
      [email, name, password],
      (error) => {
        if (error) {
          throw error;
        }

        callback(null, "Inserted successfully");
        //pool.releaseConnection();
      }
    );
  },
};

const LoginHandler = {
  login: (req, callback) => {
    var email = req.body.email;
    var password = req.body.password;
    //const query = 'SELECT * FROM user WHERE email=? AND password=? ', [email, password];

    pool.query(
      "SELECT * FROM user WHERE email=? AND password=? ",
      [email, password],
      (error,results) => {
        if (error) {
          throw error;
        }
        console.log("successful login");
        callback(null, results);
      }
    );
    /*const result = await DataHandler;

    const response = {

      statusCode: 200,
      body: JSON.stringify({ results: result }),
    };
    callback(null, response);
     */
  },
};

/*
const DataHandler = {
  read: async (event, context, callback) => {

    connection.query("SELECT * FROM user" ,function(err,results){
      if(err) throw err;
   
      resolve(results);
    });
      
    
    const response = {
      const: result = await DataHandler,
      statusCode: 200,
      body: JSON.stringify({results:result}),
    };
    callback(null, response);
  }
}
      
------signup--
const userHandler = {
  signup: (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
    callback(null, response);
  }
}
*/
module.exports = { userHandler, DataHandler, LoginHandler };
