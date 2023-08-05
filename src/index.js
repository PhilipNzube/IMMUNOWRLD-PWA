import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./LoginPage.js";
import MyApp from "./Home.js";
import swDev from "./swDev.js";

function START(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<MyApp/>}/>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);