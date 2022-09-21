'use strict'; 


module.exports.signup = (event) => {
  const response = {
    event,
    message: 'Your function executed successfully!',
       
     
  };
  
};


export const testt =async event => {


  await response(
    
    //signup = async (name, email, password) => {
      //const isExistingUser = await User.findOne({ email: email }); //check whether a unique email address
     // if (isExistingUser) {
       // throw new Error("email already exist");
     // }
      //const newUser = new User({
       // create an object from User model
        //name,
        //email,
        //password,
    // });
     
     // await newUser.save();
  //  }
  )
   
  return {
    event,
    "statusCode": 200,
    'headers': {},
    "body": json.dumps('Go Serverless v1.0! Your function executed successfully!',response ) };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

 
 


 