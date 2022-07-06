import './Home.css';

export default function BStyler({work}){
    if(work==='True'){
    setTimeout(function(){
        document.body.style.overflowY="scroll";
    },1000);
}
}