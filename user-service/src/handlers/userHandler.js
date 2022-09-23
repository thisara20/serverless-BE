const mysql = require('mysql2');
const connection = require("./../../db")


const DataHandler = {
  read: async (event, context, callback) => {

    var query = "SELECT * FROM user"

    connection.query(query, (error, results) => {
      if (error) {
        throw new error
      }
      console.log(results);

    })
    const result = await DataHandler;

    const response = {

      statusCode: 200,
      body: JSON.stringify({ results: result }),


    };
    callback(null, response);
  }
}


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

module.exports = { userHandler, DataHandler };
//export default userHandler;