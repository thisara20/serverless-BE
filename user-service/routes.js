 import {userHandler} from "./src/handlers"; ; 

 export const signup = (event,context,callback) => userHandler.signup(event,context,callback );
 export const read = (event,context,callback) => userHandler.read(event,context,callback );
 export const login = (event,context,callback) => userHandler.login(event,context,callback );