import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./LoginPage.js";
import MyApp from "./Home.js";
import swDev from "./swDev.js";
import Demo from "./Demo.js";

function START(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<MyApp/>}/>
            <Route path="/Demo" element={<Demo/>}/>
        </Routes>
        
        </BrowserRouter>
        </>
    )
}
swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<START/>);