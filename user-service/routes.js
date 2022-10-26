 
 import {userHandler} from "./src/handlers"; ; 

 export const signup = (event,context,callback) => userHandler.signup(event,context,callback );
 export const read = (event,context,callback) => userHandler.read(event,context,callback );
 export const login = (event,context,callback) => userHandler.login(event,context,callback );
 

//import userHandler from "./src/handlers";
const {userHandler} = require('./src/handlers');
const { DataHandler } = require('./src/handlers/userHandler');
const {LoginHandler} =require('./src/handlers/userHandler');

 signup = (event,context,callback) => userHandler.signup(event,context,callback );
 read = (event,context,callback) => DataHandler.read(event,context,callback );
 login = (event,context,callback) => LoginHandler.login(event,context,callback );

module.exports ={signup,read,login};

//import userHandler from "./src/handlers";
const {userHandler} = require('./src/handlers');
const { DataHandler } = require('./src/handlers/userHandler');

 signup = (event,context,callback) => userHandler.signup(event,context,callback );
 read = (event,context,callback) => DataHandler.read(event,context,callback );

module.exports ={signup,read};
