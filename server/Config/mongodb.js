const mongoose =require('mongoose');

let connectionString = 'mongodb://localhost:27017'
const connectToDB = async()=>{
    try{
    await mongoose.connect(connectionString);
      console.log('DB Connection is successful');
    }catch(error){
        console.log(`Error in connection to DB : ${error}`)
    }
}
module.exports = {connectToDB};