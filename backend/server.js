import express from "express";

const app = express();


app.get("/api/notes",(req,res)=>{
    res.send("GET method is wroking successfully");
})

app.post("/api/notes/:id",(req,res)=>{
    // res.status(201).send("POSTT http method working successfully");
    res.status(201).json({message:"post has been created successfully"});
})

app.put("/api",(req,res)=>{
// res.send("PUT method also workign successfully");
res.status(200).json({message:"update method working successfully"});

})

app.delete("/api/notes/:id/data",(req,res)=>{
console.log("opps");
// res.send("DELETE method working successfully");
res.json({message:"delete request workign properly"});
})

app.listen(5001,()=>{
    console.log("server started successfully");
});