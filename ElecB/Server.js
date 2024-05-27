const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb://localhost:27017/book").then(()=>{
    console.log("Database connection established")
}).catch((err) => console.log(err))

const electronicRoute = require("./routes/electronicsRoute")


app.use(electronicRoute);



app.listen(7000 , () => console.log("Server is Runing on port 5000")) 