import express from "express";
import notesRoute from "./routes/notesRoute.js"   // we can import files as well as fucntions in js 

const app = express();

app.use("/api/notes",notesRoute); // how setting till /api/notes , and calling further routes from a differen file , this makes code super readable 




// app.get("/api/notes",(req,res)=>{
//     res.send("GET method is wroking successfully");
// })

// app.post("/api/notes/:id",(req,res)=>{
//     // res.status(201).send("POSTT http method working successfully");
//     res.status(201).json({message:"post has been created successfully"});
// })

// app.put("/api/notes",(req,res)=>{
// // res.send("PUT method also workign successfully");
// res.status(200).json({message:"update method working successfully"});

// })

// app.delete("/api/notes/:id/data",(req,res)=>{
// console.log("opps");
// // res.send("DELETE method working successfully");
// res.json({message:"delete request workign properly"});
// })

app.listen(5001,()=>{
    console.log("server started successfully");
});


// here we can see every router has common part /api/notes , we can use best express routing practices i.e creating seperate router for managing files more precisely
// here we can use .router and .use propertis to call these api in seperate fiels in the codebase 