require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// exports.connectMonggose =()=>{
//     mongoose.connect(process.env.DATABASE_URL,
//     {
//         useNewUrlParser: true
//     })
//     .then((e)=>console.log("Connected to Mongodb =>> Auth-Project"))
//     .catch((e)=>console.log("Not Connect Mongodb"))
// }
const DB = 'mongodb+srv://Ritika:1234560@cluster0.umk4mbc.mongodb.net/';

mongoose.connect(DB).then(() => {
    console.log('Connection Successful');
}).catch((err) => console.log('No Connection' + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connection to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;