import './Home.css';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export default function BStyler({work}){
    const Navigate = useNavigate();
    const GoBackToLogIn = () => {
        Navigate("/");
    }
    useEffect(()=>{
    if(work==='True'){
        
        if(sessionStorage.getItem("CameFromLogin")===null){
            console.log("Bstyler");
GoBackToLogIn();
        }
    setTimeout(function(){
        document.body.style.overflowY="scroll";
    },1000);
}else{
    sessionStorage.setItem("CameFromLogin",1);
    console.log("NoBstyler");  
}
     
});
}