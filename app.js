require("./config/db")
const express = require('express');
const cors = require('cors');
 const users = require(`./models/users.model`);
 const userRouter = require(`./routes/users.routes`);

const app = express();


app.use(cors());
app.use(express.urlencoded({exteded : true}));
app.use(express.json());


//users routes
app.use("/api/users", userRouter)

//Home routes
app.get("/", (req, res , next)=>{
    res.sendFile(__dirname + "/views/index.html")
})



//Wrong routes
app.use((req, res , next)=>{
    res.status(400).json({messege : "Bad request"})
})

//500 status
app.use((err, req, res , next)=>{
    res.status(500).json({messege : "Something Broke"})
})












module.exports = app;
