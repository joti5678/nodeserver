const mongoose = require('mongoose');


// Create Product Schema
const userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        
        createdOn: {
            type: Date,
            default: Date.now
        },
    }
)

// Create Product Model 
module.exports = mongoose.model("User", userSchema);
