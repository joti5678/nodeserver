const {v4 : uuidv4} = require("uuid");
const User = require("../models/users.model")

const getAllUsers = async (req, res , next)=>{
    
// Create GET Method to get all data from server 
 try { 
    const users = await User.find()
    userscount = await User.find().countDocuments();
        if(users){
            res.status(200).send({
                success : true,
                message : "All Products found:",
                TotalUsers: userscount,
                data : users,
            })
            
        } else {
            res.status(404).send({
                success : false,
                message : "No Users found !!",
            });
            
        }
        
    } catch (error) {
        res.status(500).send({messege : "USERS GET ERROR!!!!" + error.messege})
    }
}

const getOneUser = async (req, res , next)=>{
    
// Create GET Method to get one user data from server 
 try { 
    const singleuser = await User.findOne({id : req.params.id})
    if(singleuser){
            res.status(200).send({
                success : true,
                message : "User details:",
                data : singleuser,
            })
            
        } else {
            res.status(404).send({
                success : false,
                message : "No User found !!",
            });
            
        }
        
    } catch (error) {
        res.status(500).send({messege : "SINGLE USER GET ERROR!!!!" + error.messege})
    }
}

// Create User
const createUser = async (req, res , next)=>{

    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),   
        })
        const saveUser = await newUser.save();
        if(saveUser){
            res.status(200).send({
                success : true,
                message : "User Inserted:",
                data : saveUser,
            })
            
        } else {
            res.status(404).send({
                success : false,
                message : "No Product Inserted !!",
            });
            
        }
        } catch (error) {
            res.status(500).send({messege : "POST ERROR!!!!" + error.messege})
           
        }
}

// Update User

const updateUser = async (req, res , next)=>{

    try{
    const singleuser = await User.findOne({id : req.params.id})

            singleuser.name = req.body.name;
            singleuser.age = Number(req.body.age) ;  
       
        const saveUser = await singleuser.save();
        if(saveUser){
            res.status(200).send({
                success : true,
                message : "User Inserted:",
                data : saveUser,
            })
            
        } else {
            res.status(404).send({
                success : false,
                message : "No Product Inserted !!",
            });
            
        }} catch (error) {
            res.status(500).send({messege : "POST ERROR!!!!" + error.messege})
           
        }

}


// Delete User

const deleteUser = async (req, res , next)=>{
    try { 
       const getid = req.params.id;
       const deleteuser = await User.deleteOne({id : getid})
        if(deleteuser){
            res.status(200).send({
                success : true,
                message : "User Deleted:",
                data : deleteuser,
            })
        } 
        else {
            res.status(404).send({
                success : false,
                message : "No product found !!",
            });
        }
    } catch (error) {
        res.status(500).send({messege : "USER DELETE ERROR!!!!" + error.messege})
    }
}




module.exports = {getAllUsers, createUser, updateUser, deleteUser, getOneUser};