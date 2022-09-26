//import userHandler from "./src/handlers";
const {userHandler} = require('./src/handlers');
const { DataHandler } = require('./src/handlers/userHandler');
const {LoginHandler} =require('./src/handlers/userHandler');

 signup = (event,context,callback) => userHandler.signup(event,context,callback );
 read = (event,context,callback) => DataHandler.read(event,context,callback );
 login = (event,context,callback) => LoginHandler.login(event,context,callback );

module.exports ={signup,read,login};
