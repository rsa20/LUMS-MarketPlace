const mongoose = require('mongoose')

const connectDataBase = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDataBase