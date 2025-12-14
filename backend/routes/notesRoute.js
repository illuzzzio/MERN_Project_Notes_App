import express from "express";


const router = express.Router();

router.get("/",(req,res)=>{
    res.send("GET method is wroking successfully");
})

router.post("/:id",(req,res)=>{
    // res.status(201).send("POSTT http method working successfully");
    res.status(201).json({message:"post has been created successfully"});
})

router.put("/",(req,res)=>{
// res.send("PUT method also workign successfully");
res.status(200).json({message:"update method working successfully"});

})

router.delete("/:id/data",(req,res)=>{
console.log("opps");
// res.send("DELETE method working successfully");
res.json({message:"delete request workign properly"});
})

export default router;   // thsi function exporting syntax in js 
