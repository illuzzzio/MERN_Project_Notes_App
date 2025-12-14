import mongoose from "mongoose";

 export const connectDB = async ()=>{
    try{
     await mongoose.connect(process.env.MONGO_URI);
        console.log("database connection established successfully")

    } catch(error){
        console.error("Couldn't connect to db")

    }
}

