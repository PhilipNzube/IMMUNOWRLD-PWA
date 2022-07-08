import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Timer from './Timer.js';
import BStyler from './BodyStyler.js';
import GameName from './images/GameName.png';
import GameName2 from './images/GameName2.png';
import Immunocalypse2Icon from './images/Immunocalypse2-Icon.png';
import Gallary2 from './images/Gallary2.png';
import Gallary3 from './images/Gallary3.png';
import Gallary4 from './images/Gallary4.png';
import Gallary5 from './images/Gallary4.png';
import FB from "./images/Fb.png";
import Twitter from "./images/Twitter.png";
import Insta from "./images/Insta.png";
import LinkedIn from "./images/LinkedIn.png";
export default function MyApp() {
    const Loaded = () => {
        document.getElementById("Gallary").style.filter = "blur(0em)";
        console.log("Images");
    }
    window.addEventListener("beforeunload", ()=>{
        console.log("LOADED");
        document.getElementById("Handler").style.display = "none";
        setTimeout(() => {
            document.getElementById("Handler").style.display = "block";
        }, 100);
    });
    useEffect(() => {
        setTimeout(function () {
            document.getElementById("Loader").style.display = "none";
            document.getElementById("Cont").style.display = "block";
        }, 1000);
        
    }, []);
    setTimeout(function () {
        document.addEventListener("fullscreenchange", ExitHandler);
    }, 1000);

    
    var CClickNo = 0;
    var AClickNo = 0;



    const OpenGame1 = () => {
        const color = ["rgba(15, 14, 14, 0.685)"];
        document.getElementById("Game1About").style.backgroundColor = color;
        document.getElementById("Game1").style.display = "block";
        document.getElementById("MainContBG").style.display = "none";
        document.getElementById("Footer").style.display = "none";
        if (document.getElementById("Cont").requestFullscreen) {
            document.getElementById("Cont").requestFullscreen();
        }
    }

    const CloseGame1 = () => {
        document.getElementById("Footer").style.display = "block";
        //document.getElementById("RPI").style.width="50px";
        //document.getElementById("RPI").style.height="50px";
        document.body.style.overflowY = "scroll";
        document.getElementById("Game1").style.display = "none";
        document.getElementById("MainContBG").style.display = "block";
        document.exitFullscreen();
        const color = ["rgba(15, 14, 14, 0)"];
        document.getElementById("Game1About").style.backgroundColor = color;
        //document.getElementById("RPI").style.bottom="500px";
        //document.getElementById("RPI").style.width="50px";
        //document.getElementById("RPI").style.height="50px";
    }


    const ExitHandler = () => {
        if (!document.fullscreenElement) {
            CloseGame1();
        }
    }




    const Home = () => {
        document.getElementById("Handler").style.display = "block";
        document.body.style.overflowY = "scroll";
        document.getElementById("Home").style.textDecoration = "underline";
        document.getElementById("Home").style.textDecorationColor = "rgb(252, 251, 251)";
        document.getElementById("Home").style.textDecorationThickness = "3px";
        document.getElementById("Home").style.color = "rgb(255, 0, 0)";
        document.getElementById("Contact").style.textDecoration = "none";
        document.getElementById("Contact").style.color = "rgb(252, 251, 251)";
        document.getElementById("About").style.textDecoration = "none";
        document.getElementById("About").style.color = "rgb(252, 251, 251)";
        document.getElementById("ContactPanel").style.display = "none";
        document.getElementById("AboutPanel").style.display = "none";
        document.getElementById("Home").style.cursor = "default";
        AClickNo = 0;
        CClickNo = 0;
    }


    const OpenAbout = () => {
        if (AClickNo === 0) {
            CClickNo = 0;
            document.getElementById("Handler").style.animationName = "SlideAway";
            document.getElementById("Handler").style.animationDuration = "0.5s";
            document.getElementById("Handler").style.animationIterationCount = "1";
            setTimeout(() => {
                document.getElementById("Handler").style.display = "none";
                document.getElementById("Handler").style.animationName = "Slide";
            }, 100);
            document.getElementById("About").style.textDecoration = "underline";
            document.getElementById("About").style.textDecorationColor = "rgb(252, 251, 251)";
            document.getElementById("About").style.textDecorationThickness = "3px";
            document.getElementById("About").style.color = "rgb(255, 0, 0)";
            document.getElementById("Home").style.textDecoration = "none";
            document.getElementById("Home").style.color = "rgb(252, 251, 251)";
            document.getElementById("Contact").style.textDecoration = "none";
            document.getElementById("Contact").style.color = "rgb(252, 251, 251)";
            document.getElementById("AboutPanel").style.display = "block";
            document.getElementById("ContactPanel").style.display = "none";
            document.getElementById("Home").style.cursor = "pointer";
            document.body.style.overflowY = "hidden";
            AClickNo++;
        } else
            if (AClickNo === 1) {
                CloseAbout();
                AClickNo = 0;
            }
    }

    const CloseAbout = () => {
        document.getElementById("Handler").style.display = "block";
        document.body.style.overflowY = "scroll";
        document.getElementById("AboutPanel").style.display = "none";
        document.getElementById("ContactPanel").style.display = "none";
        document.getElementById("Home").style.textDecoration = "underline";
        document.getElementById("Home").style.textDecorationColor = "rgb(252, 251, 251)";
        document.getElementById("Home").style.textDecorationThickness = "3px";
        document.getElementById("Home").style.color = "rgb(255, 0, 0)";
        document.getElementById("About").style.textDecoration = "none";
        document.getElementById("About").style.color = "rgb(252, 251, 251)";
        document.getElementById("Home").style.cursor = "default";
    }



    const OpenContact = () => {
        if (CClickNo === 0) {
            AClickNo = 0;
            document.getElementById("Handler").style.animationName = "SlideAway";
            document.getElementById("Handler").style.animationDuration = "0.5s";
            document.getElementById("Handler").style.animationIterationCount = "1";
            setTimeout(() => {
                document.getElementById("Handler").style.display = "none";
                document.getElementById("Handler").style.animationName = "Slide";
            }, 100);
            document.getElementById("Contact").style.textDecoration = "underline";
            document.getElementById("Contact").style.textDecorationColor = "rgb(252, 251, 251)";
            document.getElementById("Contact").style.textDecorationThickness = "3px";
            document.getElementById("Contact").style.color = "rgb(255, 0, 0)";
            document.getElementById("Home").style.textDecoration = "none";
            document.getElementById("Home").style.color = "rgb(252, 251, 251)";
            document.getElementById("About").style.textDecoration = "none";
            document.getElementById("About").style.color = "rgb(252, 251, 251)";
            document.getElementById("ContactPanel").style.display = "block";
            document.getElementById("AboutPanel").style.display = "none";
            document.getElementById("Home").style.cursor = "pointer";
            document.body.style.overflowY = "hidden";
            CClickNo++;
        } else
            if (CClickNo === 1) {
                CloseContact();
                CClickNo = 0;
            }
    }

    const CloseContact = () => {
        document.getElementById("Handler").style.display = "block";
        document.body.style.overflowY = "scroll";
        document.getElementById("ContactPanel").style.display = "none";
        document.getElementById("AboutPanel").style.display = "none";
        document.getElementById("Home").style.textDecoration = "underline";
        document.getElementById("Home").style.textDecorationColor = "rgb(252, 251, 251)";
        document.getElementById("Home").style.textDecorationThickness = "3px";
        document.getElementById("Home").style.color = "rgb(189, 33, 33)";
        document.getElementById("Contact").style.textDecoration = "none";
        document.getElementById("Contact").style.color = "rgb(252, 251, 251)";
        document.getElementById("Home").style.cursor = "default";
    }

    const Navigate = useNavigate();
    const GoLogIn = () => {
        Navigate("/");
    }
    const VisitDemo = () =>{
        Navigate("/Demo");
    }
//var timer=null;
var lastScrollTop=0;
    window.onscroll =()=>{
        if(window.innerWidth<=999){
var st=window.pageYOffset || document.documentElement.scrollTop;
if(st>lastScrollTop){
    console.log("DarkBGMobile");
    document.getElementById("Bar").style.backdropFilter="blur(0.2em)";
}else{
    console.log("NoDarkBGMobile");
    document.getElementById("Bar").style.backdropFilter="blur(0em)";
}
lastScrollTop=st<=0?0:st;
        }else if(window.innerWidth>999){
        if((window.innerHeight + window.scrollY)>=document.body.scrollHeight){
            console.log("DarkBG");
            document.getElementById("Bar").style.backdropFilter="blur(0.2em)";
        }else{
        console.log("NoDarkBG");
            document.getElementById("Bar").style.backdropFilter="blur(0em)";
        }
        /*
        if(timer!==null){
            console.log("NoDarkBG");
            document.getElementById("Bar").style.backdropFilter="blur(0.2em)";
            clearTimeout(timer);
        }
        timer=setTimeout(()=>{
            console.log("DarkBG");
            document.getElementById("Bar").style.backdropFilter="blur(0em)"; 
        },150) 
        */
    }
    }
    
    let url = null;
    return (
        <>
            <BStyler work={"True"} />
            <div id="Loader">
                <center><b id="LOADTEXT">LOADING...</b></center></div>
            <div id="Cont">
                <div id="MainCont">
                    <div id="Game1"><img alt='ImmunocalypseDeadlyTour' onClick={CloseGame1} id="Game1Img" src={GameName} title="CLICK/TAP TO CLOSE" />
                        <p id="Game1About"><b>Immunocalypse-Deadly Tour is an FPS co-op multiplayer game. <br />Its been six years since APEX city was destroyed after it was attacked by creatures.
                            <br />A super soldier from the S.I.E.G.E program has been given a mission to rescue some soldiers who are being attacked by creatures who attacked APEX city years ago while uncovering the truth about what truly happened at APEX city and the secrets the N.G.O. has been hiding.<br />
                            <a id="PlayStore" href="https://www.whereever.com">-DOWNLOAD THE GAME ON PLAYSTORE-</a> </b></p>
                    </div>
                    <div id="MainContBG">
                        <header id="Bar">
                            <div id="Logo"><img alt='ImmunowrldLogo' onClick={GoLogIn} id="LogoImg" src={Immunocalypse2Icon} width="80px" height="80px" /><div id="LogoText"><h1>IMMUNOWRLD</h1></div></div>
                            <div id="TopBar">
                                <div id="Links">
                                    <h3><a href={url} id="Home" onClick={Home}>HOME</a>
                                        <a href={url} id="About" onClick={OpenAbout}>ABOUT</a>
                                        <a href={url} id="Contact" onClick={OpenContact}>CONTACT</a></h3>
                                </div>
                            </div>
                        </header>
                        <div id="Overlay">
                            <div id="Handler">
                                <img alt='ImmunocalypseDeadlyTour' onLoad={Loaded} className="Released" id="Gallary" onClick={OpenGame1} src={GameName} width="200px" height="150px" />
                                <img alt='ImmunocalypseDeadlyTour2' onLoad={Loaded} className="ComingSoon" id="Gallary" src={GameName2} width="200px" height="150px" />
                                <img alt='ComingSoon' onLoad={Loaded} className="ComingSoon2" id="Gallary" src={Gallary2} width="200px" height="150px" />
                                <img alt='ComingSoon' onLoad={Loaded} className="ComingSoon3" id="Gallary" src={Gallary3} width="200px" height="150px" />
                                <img alt='ComingSoon' onLoad={Loaded} className="ComingSoon4" id="Gallary" src={Gallary4} width="200px" height="150px" />
                                <img alt='ComingSoon' onLoad={Loaded} className="ComingSoon5" id="Gallary" src={Gallary5} width="200px" height="150px" />
                                <Timer />
                                <h1 id="CSText2">COMING SOON</h1>
                                <h1 id="CSText3">COMING SOON</h1>
                                <h1 id="CSText4">COMING SOON</h1>
                                <h1 id="CSText5">COMING SOON</h1>
                            </div>
                        </div>
                        <div id="ContactPanel"><p id="ContactContent"><br /><br />Phone No: 09016482578<br /><br /><b>SOCIAL MEDIA:</b><br />Twitter: @Philip_nzube<br /><br />Whatsapp: 09029751915<br /><br />Instagram: philinstadev<br /><br />Facebook: Philip Nzubechukwu</p></div>
                        <div id="AboutPanel"><p id="AboutContent"><br /><br /><br /><br /><br /><b>This is where you can find all the games created by Onwubalili Philip Nzube. You can visit <a href={url} onClick={VisitDemo}><b>here</b></a> for the demos<br />All IMMUNOWRLD games are connected.  </b></p></div>
                    </div>

                </div>
                <footer id="Footer"><p id="Date"><b>IMMUNOWRLD ©2022</b></p><div id="Socials">
                    <a href="https://www.facebook.com/philip.onwubalili"><img alt='FaceBookIcon' id="FB" src={FB} height="60px" width="70px" /></a>
                    <a href="https://www.instagram.com/philinstadev"><img alt='InstagramIcon' id="Insta" src={Insta} height="60px" width="70px" /></a>
                    <a href="https://twitter.com/Philip_nzube"><img alt='TwitterIcon' id="Twitter" src={Twitter} height="60px" width="70px" /></a>
                    <a href="https://www.linkedin.com/in/philip-onwubalili-54049823a"><img alt='LinkedInIcon' id="LinkedIn" src={LinkedIn} height="60px" width="70px" /></a>
                </div></footer>
            </div>
        </>
    )
}

