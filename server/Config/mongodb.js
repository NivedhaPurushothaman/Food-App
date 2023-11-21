const mongoose =require('mongoose');

let connectionString = 'mongodb+srv://Nivedha:daddy@cluster0.oqrwxsz.mongodb.net/?retryWrites=true&w=majority'
const connectToDB = async()=>{
    try{
    await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connection is successful');
    }catch(error){
        console.log(`Error in connection to DB : ${error}`)
    }
}
module.exports = {connectToDB};