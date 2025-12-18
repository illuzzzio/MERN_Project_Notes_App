import React from "react";
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import toast from "react-hot-toast"

const App = ()=>{
  return(
   <div>
    <button onClick={()=>toast.success("Congratulations")}>Click Here</button>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/create" element={<CreatePage/>}/>
    <Route path="detail" element={<DetailPage/>}/>
    </Routes>
   </div>
  )
}

export default App;