require("dotenv").config();
// const app = require("./app")

const dev = {
    app : {
        port : process.env.PORT || 5000
    },
    dburl : {
        url : process.env.DB_URL
    }
}


module.exports =  dev;


