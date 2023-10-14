import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            bufferCommands:true
        });
        console.log('Connected to mongoDB')
    }catch(err){
        console.log(err)
    }
}

export default connectMongoDB