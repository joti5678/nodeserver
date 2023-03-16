const mongoose = require("mongoose");
const config = require("./config")

const DBURL = config.dburl.url;
      try {
          //   mongoose.connect(DBURL);
             mongoose.connect('mongodb://127.0.0.1:27017/testUserDB');
            console.log("MongoDB is Connected");
        } catch (error) {
            console.log("MongoDB is Not Connected");
            console.log(error);
            process.exit(1);
        }

    // const connectDB = async () =>{
    //     try {
    //         await mongoose.connect('mongodb://127.0.0.1:27017/testProductDB');
    //         console.log("MongoDB is Connected");
    //     } catch (error) {
    //         console.log("MongoDB is Not Connected");
    //         console.log(error);
    //         process.exit(1);
    //     }
    // }

// module.exports =  dev;