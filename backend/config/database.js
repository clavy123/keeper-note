const mongoose = require('mongoose')
const connectWithDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(() => {
        console.log('database connected')
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = connectWithDB;