// pseduo defining the model , every note must have a :
//Title
//content
//date  we can define it by createdAt

import mongoose from "mongoose";

//1 : We will create a schema 
//2 : model based of that schema

const notesSchema = mongoose.Schema({
    title:{
        type : String,
        required : true,
    },
    content:{
        type : String,
        required : true ,
    },
    
},
{timestamps:true}) // by this new object syntax mongoDB will by default give you createdAt , updatedAt fields


// above was our schema , now will create a Note model, based on the designed schema...