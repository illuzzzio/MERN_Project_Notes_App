import express from "express";

import { getAllNotes } from "../controllers/notesController.js"
import {createAllNotes} from "../controllers/notesController.js";
import { updateAllNotes } from "../controllers/notesController.js";
import {deleteAllNotes} from "../controllers/notesController.js";


const router = express.Router();

// router.get("/",(req,res)=>{
//     res.send("GET method is wroking successfully");
// })

// router.post("/:id",(req,res)=>{
//     // res.status(201).send("POSTT http method working successfully");
//     res.status(201).json({message:"post has been created successfully"});
// })

// router.put("/",(req,res)=>{
// // res.send("PUT method also workign successfully");
// res.status(200).json({message:"update method working successfully"});

// })

// router.delete("/:id/data",(req,res)=>{
// console.log("opps");
// // res.send("DELETE method working successfully");
// res.json({message:"delete request workign properly"});
// })


router.get("/",getAllNotes);
router.post("/",createAllNotes);
router.put("/:id",updateAllNotes);
router.delete("/:id/data", deleteAllNotes)
export default router;   // this function exporting syntax in js 


//these fucntions of get post put and delete are called http methods and the code insdie them is called caontrolelr , which can be very big fucntions 