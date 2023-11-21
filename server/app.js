const express = require('express')
const cors = require('cors')

const {connectToDB} = require('./Config/mongodb')

const app =express()
app.use(cors())

const PORT = 5000;

connectToDB();

app.get('/',(req,res)=>{
    res.send("Wooooooohhhhho!!!!!!!!!!!!Server is UP!!!!!!!!")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
});