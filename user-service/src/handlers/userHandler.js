const mysql =require('mysql2');  
//const connection = require("./../../db")

 
const userHandler =  {
  signup: (event,context,callback )  => {
    const response = {
      statusCode: 200, 
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
   callback(null,response);
  }
}
 

const DataHandler =  {
  read: (event,query,context,callback )  => {
    const sql='SELECT * FROM user'
     const query = connection.query(sql,(error,result) =>{
          if(error){
              throw new error
          }  
              console.log(result);
          
          } ) 
    const response = {
       
      statusCode: 200, 
      body: JSON.stringify({
        message: '  function executed successfully!',
        input: event ,
      }),

       
    };
   callback(null,response);
  }
}
module.exports ={userHandler,DataHandler};
//export default userHandler;