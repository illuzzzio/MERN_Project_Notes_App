export async function  getAllNotes  (req,res){
    res.status(200).send("You have just fetched the notes")
}

export async function postAllNotes(req,res){

res.status(200).json({message:"Notes posted successfully"});
}

export async function updateAllNotes(req,res){
    res.json({message:"All the notes have been updated successfully"});
}

export async function deleteAllNotes(req,res){
    res.status(200).json({message:"All the notes have been deleted successfully"});
}







// all these fucntions are being called in notesRoute.js , you can write these fucntion directly under http methods too, but this is more optimised way to write the fucntions in seperate file notesController.js and calling them on the notesRoutes.js , and further we are only writing the back part of the route in the notesRoute.js the fixed noutes /api/notes is being used from server.js file..