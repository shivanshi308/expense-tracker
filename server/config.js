//setup database connection using connection Url

const mongoose = require('mongoose')

const connectDB = async ()=> {

    try{

        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connected to DB')
    }
    catch(err){
        console.log(`Failed to connect to DB, error : ${err.message}`)
    }
}

module.exports= connectDB