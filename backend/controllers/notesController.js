import Note from "../models/Note.js"

//this get tmethod will rewturn an empty array , untill not posts are made to it 
export async function  getAllNotes  (req,res){
   try{
    const notes = await Note.find();
    res.status(200).json(notes);
    
   } catch(error){
    console.error("GET request not working properly");
   }
}



export async function createAllNotes(req,res){
    // if user want to create a note , they need to pass the title as well as the content, as per schema and model defined 
try{
    const{title,content} = req.body  // we need to passs this as keys in the request body fpr testing api for post request 
    const note = new Note({title:title, content:content}) // we can even shorten this , as key and value are defined same by us 
    
   const savedNote =  await note.save()

    // res.status(200).json({message:"Note has been created successfully"})
    res.status(200).json(savedNote)
} catch(error){
    console.error("Unable to create a Note",error);
    res.status(500).json({message:"Internal Server Error"})

}

}



export async function updateAllNotes(req,res){
    // res.json({message:"All the notes have been updated successfully"});
    try{
        const{title,content} = req.body
       const updated =  await Note.findByIdAndUpdate(req.params.id,{title,content}) 
        res.status(200).json({message:"Notes have been updated successfully"}) // with this any user can pass his own id and can get the updates , followed by the fields we want to update .

    } catch(error){
        console.error("Can't access PUT request",error);
        res.status(500).json({message:"Internal Server Error"});
    }  //693ec19c325dadd91672a3ee in id for mongo we have to find the user id and then pass not numbers like 1-infinite ...
}



export async function deleteAllNotes(req,res){
    // res.status(200).json({message:"All the notes have been deleted successfully"})
try{ const {title,content}= req.body;
const deleted = await Note.findByIdAndDelete(req.params.id,{title,content});
res.status(200).json({message:"Note deleted successfully"});

} catch(error){
    console.error("Internal Server Error",error.message());
    res.status(500).json({message:"Delete request not working properly"});
}
}







// all these fucntions are being called in notesRoute.js , you can write these fucntion directly under http methods too, but this is more optimised way to write the fucntions in seperate file notesController.js and calling them on the notesRoutes.js , and further we are only writing the back part of the route in the notesRoute.js the fixed noutes /api/notes is being used from server.js file..