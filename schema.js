var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = "mongodb://localhost:27017/test";

mongoose.connect(url, {useNewUrlParser: true});

var user_schema = new Schema({
    name: String,
    username: String,
    password: String,
    age: Number,
    email: String

});


var user = mongoose.model("user",user_schema);

module.exports.user=user;