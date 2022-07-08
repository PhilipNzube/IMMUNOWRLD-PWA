import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Demo.css';
export default function Demo(){
    useEffect(()=>{
setTimeout(()=>{
    document.getElementById("Loader").style.display="none";
document.getElementById("Container").style.display="block";
},1000);
    });
    const Navigate = useNavigate();
    const BackToHome=()=>{
        Navigate("/Home");
    }
    let Url=null;
    return(
        <>
        <div id="Loader">
                <center><b id="LOADTEXT">LOADING...</b></center></div>
        <div id="Container">
            <nav>
            <a href={Url} id="Back" onClick={BackToHome}>Back</a>
            </nav>
        </div>
        </>
    )
}