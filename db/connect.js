require("dotenv").config();
const mongoose = require("mongoose");

const connect = (callback) => {
    mongoose.connect(process.env.MONGODBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((res) => {
        callback
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = connect;



