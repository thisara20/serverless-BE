//const bcrypt = require('bcrypt');
import {userModel} from "../models";
import bcrypt from "bcryptjs" ;
const jwt = require("jsonwebtoken");

const userHandler = {
  
  signup: async (event, context, callback) => {
    event.body = JSON.parse(event.body)
    console.log("event",event.body)
    console.log("event2", event.body.email)
    
    const email = event.body.email;
    const name = event.body.name;
    const password = event.body.password;

    const results =await userModel.isExistingUser(email);
    console.log("ss",results);
     
    if(results == 0){
      const hash = await bcrypt.hash(password, 10);
     
      const signupQuery = await userModel.signup(email,name,hash);
      
      if(signupQuery){
        var response = {
          statusCode: 200,
          body: JSON.stringify("User added successfully!"),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };
        return response;
      }else{
        var response = {
          statusCode: 400,
          body: JSON.stringify("Error while registering!"),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };
        return response;
      }
    }else{
      var response = {
        statusCode: 400,
        body: JSON.stringify("Email already exists"),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      return response;
    }

     
    
    
  },
 
  read:async(event, context, callback) => {
    const authHeader = event.headers.Authorization;
    console.log("authH",authHeader);
    const key = process.env.SECURITY_KEY;
    const token = await authHeader.split(" ")[1];
    
     const decoded = jwt.verify(token, key);
     if(decoded){
      const results =await userModel.read();
      if(results.length>0){
        var response = {
          statusCode: 200,
          body: JSON.stringify({data:results}),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        };
        return response; 
      }else { var response = {
        statusCode: 400,
        body: JSON.stringify("error occured"),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
     }
     }else { var response = {
      statusCode: 401,
      body: JSON.stringify("verify token"),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
   }
      
     
         
  },

  login: async (event, context, callback) => {
    event.body = JSON.parse(event.body)
    
    const email = event.body.email;
    const password = event.body.password;
   const key =process.env.SECURITY_KEY;

  const [results] =await userModel.isExistingUser(email);
 
  if(results.length>0){
    const hash= results[0].password;
    const validate = await bcrypt.compare(password, hash);
   
    if(validate){
      const token = jwt.sign({email: email,},key, { expiresIn: "1h"});
      console.log("token",token);
      var response = {
        statusCode: 200,   
        body: JSON.stringify({token:token ,message:"signed in success"} ),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      return response;
    }else{
      var response = {
        statusCode: 400,
        body: JSON.stringify("Login failed"),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      return response;
    }
    
  }
     
    
  },
   /*
  verifyToken: async (event, context, callback) => {
    const authHeader = req.body.headers.Authorization;
    console.log("authH",authHeader)
    const key = process.env.SECURITY_KEY;
    try {
      const token = await authHeader.split(' ')[1];
  if (token) {
    const decoded = jwt.verify(token, key);
    user = decoded;
   } else throw new Error("A token is required for authentication");
     
      next();
    } catch (error) {
      var response = {
        statusCode: 400,
        body: JSON.stringify("Invalid Token"),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
      return response;
    }
}

     */
 
   
  
/*
  login: (req, callback) => {
    var email = req.body.email;
    var password = req.body.password;
    //const query = 'SELECT * FROM user WHERE email=? AND password=? ', [email, password];
    //"INSERT INTO user (`email`, `name`, `password`) VALUES ('xxx@gmail.com','name', 'password')",

    pool.query(
      "SELECT * FROM user WHERE email='xxx@gmail.com' AND password='password'",
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log("successful login");
        callback(null, results);
      }
    );
    
  },
  */
};


 
 export { userHandler };
