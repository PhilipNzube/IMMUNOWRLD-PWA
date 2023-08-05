import React /*, { useState }*/ from 'react';
import './Login.css';
import BStyler from './BodyStyler.js';
import { useNavigate } from 'react-router-dom';
import ImmunocalypseIcon from './images/Immunocalypse-icon.png';

export default function Login() {
  setTimeout(function () {
    document.getElementById("container").style.display = "block";
    document.getElementById("Loader").style.display = "none";
    document.getElementById("SubmitBG").style.display = "none";
    document.getElementById("SubmitBG2").style.display = "none";

    var FirstTime = JSON.parse(localStorage.getItem("FirstTime"));
    if (FirstTime === null) {
      localStorage.setItem("FirstTime", true);
    }
    var Visible = JSON.parse(localStorage.getItem("Visible"));
    if (Visible === false) {
      document.getElementById("GenerateButBG").style.display = "none";
      //document.getElementById("SubmitBG").style.display="block";
      document.getElementById("ResetButton").style.display = "block";
      //document.getElementById("SubmitBG").style.display="block";
    }
    if (JSON.parse(localStorage.getItem("FirstTime")) !== false) {
      console.log("CIDNotVisibleStarting");
      //localStorage.setItem("FirstTime",true);
      console.log("CIDNotVisible");
    } else if (JSON.parse(localStorage.getItem("FirstTime")) === true) {

      //localStorage.setItem("FirstTime",true); 
    }
    if (FirstTime === false) {
      document.getElementById("ResetButton").style.filter = "blur(0em)";
      //localStorage.setItem("FirstTime",true);
      console.log("NotFirstTime");
    } else if (FirstTime === true) {
      console.log("FirstTime");
      //document.getElementById("GenerateButBG").style.display="block";
      document.getElementById("SubmitBG").style.display = "none";
      document.getElementById("ResetButton").style.filter = "blur(0.05em)";
      document.getElementById("ResetButton").style.cursor = "not-allowed";

    }
    //typeWriter();
    LoadBox();

  }, 1000);



  const Toggle1 = () => {
    var Username = document.getElementById("UsenameID");
    var ActivationCode = document.getElementById("ActivationcodeID");
    var Toggle = document.getElementById("toggle");
    if (Toggle.checked === true) {
      console.log("checked");
      localStorage.setItem("cb1", true);
      localStorage.setItem("Username", Username.value);
      localStorage.setItem("ActivationCode", ActivationCode.value);
      setInterval(function () {
        console.log("saving");
        localStorage.setItem("Username", Username.value);
        localStorage.setItem("ActivationCode", ActivationCode.value);
      }, 100);
    } else if (Toggle.checked === false) {
      console.log("falsechecked");
      localStorage.setItem("cb1", false);
    }
  }
  const LoadBox = () => {
    var Username = document.getElementById("UsenameID");
    var ActivationCode = document.getElementById("ActivationcodeID");
    console.log("Loaded");
    var Checked = JSON.parse(localStorage.getItem("cb1"));
    if (Checked === true) {
      console.log("LoadedIsTrue");
      document.getElementById("toggle").checked = true;
      Username.value = localStorage.getItem("Username");
      ActivationCode.value = localStorage.getItem("ActivationCode");
      const PSWPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      var AID = document.getElementById("ActivationcodeID");
      const Test = PSWPattern.test(AID.value);
      if (Test === false) {
        document.getElementById("SubmitBG").style.display = "none";
      } else if (Test === true) {
        document.getElementById("SubmitBG").style.display = "block";
      }
      document.querySelector(".overlay").style.visibility = "visible";
      document.querySelector(".overlay").style.opacity = 1;
      localStorage.setItem("cb1", true);
      setInterval(function () {
        console.log("checked");
        //localStorage.setItem("cb1", true);
        localStorage.setItem("Username", Username.value);
        localStorage.setItem("ActivationCode", ActivationCode.value);
      }, 100);
    } else {
      console.log("AboutToMakeOverlayVisible!!");
      setTimeout(function () {
        //if(JSON.parse(localStorage.getItem("Release"))===false){
        console.log("MakeOverlayVisible!!");
        document.querySelector(".overlay").style.visibility = "visible";
        document.querySelector(".overlay").style.opacity = 1;
        //}
      }, 500);
    }
  }


  const GenerateRandomCode = (length) => {
    console.log("AboutToGenerated");
    var AID = document.getElementById("ActivationcodeID");
    var chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var code = "";
    for (var x = 0; x < length; x++) {
      localStorage.setItem("FirstTime", false);
      console.log("Generated");
      var i = Math.floor(Math.random() * chars.length);
      code += chars.charAt(i);
    }
    AID.value = code;
    document.getElementById("GenerateButBG").style.display = "none";
    //document.getElementById("SubmitBG").style.display="block";
    document.getElementById("ResetButton").style.display = "block";
    localStorage.setItem("AID", AID.value);
    localStorage.setItem("Visible", false);
  }

  const ShowPswd = () => {
    console.log("Visible");
    var x = document.getElementById("ActivationcodeID");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const ShowPswd2 = () => {
    console.log("Visible");
    var x = document.getElementById("ActivationcodeID3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  const Navigate = useNavigate();

  const OpenApp = () => {
    console.log("AboutToLunchApp");
    var UID = document.getElementById("UsenameID");
    var AID = document.getElementById("ActivationcodeID");
    var ActivationCode = localStorage.getItem("AID");
    var FirstTime = JSON.parse(localStorage.getItem("FirstTime"));
    if (FirstTime === true) {
      if (UID.value !== "") {
        localStorage.setItem("AID", AID.value);
        Navigate("/Home");
        localStorage.setItem("FirstTime", false);
      } else {
        document.getElementById("Warning").innerHTML = "No UserName!!Pls Input One";
        setTimeout(function () {
          document.getElementById("Warning").innerHTML = "";
        }, 3000);
      }
    } else if (FirstTime === false) {
      if (AID.value === ActivationCode) {
        if (UID.value !== "") {
          Navigate("/Home");
          //localStorage.setItem("FirstTime", false);
          //document.querySelector(".overlay").style.display="none";
          //document.body.style.background="./images/BG4.png";
          //typeWriter();
          console.log("LunchApp");
        } else if (UID.value === "") {
          document.getElementById("Warning").innerHTML = "No UserName!!Pls Input One";
          setTimeout(function () {
            document.getElementById("Warning").innerHTML = "";
          }, 3000);
        }
      } else if (AID.value === "") {
        document.getElementById("Warning").innerHTML = "No Password!!" + "\n" + "Pls Input One";
        setTimeout(function () {
          document.getElementById("Warning").innerHTML = "";
        }, 3000);
      } else if (AID.value !== ActivationCode) {
        document.getElementById("Warning").innerHTML = "Incorrect Password!!!";
        setTimeout(function () {
          document.getElementById("Warning").innerHTML = "";
        }, 3000);
      }
    }
  }

  const Reset = () => {
    var FirstTime = JSON.parse(localStorage.getItem("FirstTime"));
    if (FirstTime === false) {
      //localStorage.setItem("AID", AID.value);
      //localStorage.setItem("FirstTime",true);

      //document.getElementById("GenerateButBG").style.display="block";
      //document.getElementById("ResetButton").style.display="none";
      document.getElementById("popup1").style.display = "none";
      document.getElementById("popup2").style.display = "block";
      document.querySelector(".overlay2").style.visibility = "visible";
      document.querySelector(".overlay2").style.opacity = 1;
    }
  }

  const ConfirmPassword = () => {
    var UID = document.getElementById("UsenameID");
    var AID = document.getElementById("ActivationcodeID");
    var AID2 = document.getElementById("ActivationcodeID2");
    var AID3 = document.getElementById("ActivationcodeID3");
    var ActivationCode = localStorage.getItem("AID");
    if (AID3.value !== "") {
      if (AID2.value !== AID3.value) {
        if (AID2.value === ActivationCode) {
          UID.value = "";
          AID.value = "";
          localStorage.setItem("AID", AID3.value);
          document.getElementById("popup2").style.display = "none";
          document.getElementById("popup1").style.display = "block";
          document.getElementById("ConfirmationMessage").style.display = "block";
          setTimeout(function () {
            document.getElementById("ConfirmationMessage").style.animationName = "DontShow";
            document.getElementById("ConfirmationMessage").style.animationDuration = "1s";
            document.getElementById("ConfirmationMessage").style.animationIterationCount = "1";
            setTimeout(function () {
              document.getElementById("ConfirmationMessage").style.display = "none";
              document.getElementById("ConfirmationMessage").style.animationName = "Show";
              document.getElementById("ConfirmationMessage").style.animationDuration = "2s";
              document.getElementById("ConfirmationMessage").style.animationIterationCount = "1";
            }, 1000);
          }, 2000);
        } else if (AID2.value !== ActivationCode) {
          document.getElementById("Warning2").innerHTML = "Your Previous Password Is Incorrect!!";
          setTimeout(function () {
            document.getElementById("Warning2").innerHTML = "";
          }, 3000);
        }
      } else if (AID2.value === AID3.value) {
        document.getElementById("Warning2").innerHTML = "Your New Password Is The Same As Your Previous Password!!";
        setTimeout(function () {
          document.getElementById("Warning2").innerHTML = "";
        }, 3000);
      }
    } else if (AID3.value === "") {
      document.getElementById("Warning2").innerHTML = "Pls Input New Password!!";
      setTimeout(function () {
        document.getElementById("Warning2").innerHTML = "";
      }, 3000);
    }
  }

  const CLOSE = () => {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup1").style.display = "block";
  }

  const CHECK = () => {
    const PSWPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var AID = document.getElementById("ActivationcodeID");
    const Test = PSWPattern.test(AID.value);
    if (Test === false) {
      document.getElementById("SubmitBG").style.display = "none";
    } else if (Test === true) {
      document.getElementById("SubmitBG").style.display = "block";
    }
  }


  const CHECK2 = () => {
    const PSWPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const AID2 = document.getElementById("ActivationcodeID2");
    const AID3 = document.getElementById("ActivationcodeID3");
    const Test = PSWPattern.test(AID2.value);
    const Test2 = PSWPattern.test(AID3.value);
    if (Test === true && Test2 === true) {
      document.getElementById("SubmitBG2").style.display = "block";
    } else if (Test !== true || Test2 !== true) {
      document.getElementById("SubmitBG2").style.display = "none";
    }
  }
  let url = null;
  return (
    <>
      <BStyler work={"False"} />
      <div id="Expired"><br /><br /><div id="PC3"><center id="CSText"><b>-IMMUNOCALYPSE-</b><br /><small>The Deadly Tour </small>- SEASON2 IS OUT</center></div></div>
      <div id="Loader">
        <center><b id="LOADTEXT">LOADING...</b></center></div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div id="container">


        <div id="popup1" className="overlay">
          <div className="popup">
            <div id="Contents">
              <div id="Forms">
                <div id="GenerateButBG">
                  <center><a href={url} id="GenerateBut" onClick={(val) => GenerateRandomCode(8)} >GenerateCode</a></center>
                </div>
                <center><img alt='ImmunocalypseIcon' id="Mask" width="120px" height="130px" src={ImmunocalypseIcon} /></center>
                <label id="InfoID"><center>Enter your user info</center></label>
                <br /><br /><br /><br />
                <center><input id="UsenameID" type="text" placeholder="Username" required /></center>
                <br /><center><input id="ActivationcodeID" onChange={CHECK} type="password" placeholder="PassWord" title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required /><div id="PswVisible">
                  <div id="PV1"><input id="PswVisible1" type="checkbox" onClick={ShowPswd} /></div><div id="SP">SHOWPASSWORD</div></div></center><br /><br />
                <a href={url} id="ResetButton" onClick={Reset}>RESET</a>
                <div id="REMBG">
                  <label id="RememberID">Remember me</label>
                  <label className="switch">
                    <input id="toggle" type="checkbox" onClick={Toggle1} />
                    <span className="slider round">
                    </span>
                  </label>
                </div>

                <center><div id="SubmitBG">
                  <a href={url} id="Submit" onClick={OpenApp} >AUTHENTICATE</a><div id="Warning"></div></div></center>
              </div>
            </div>

          </div>
        </div>



        <div id="popup2" className="overlay2">
          <div className="popup">

            <div id="Contents2">
              <div id="Forms2">
                <center><img alt='ImmunocalypseIcon' id="Mask2" width="120px" height="130px" src={ImmunocalypseIcon} /></center>
                <label id="InfoID2"><center>Confirm your password</center></label>
                <br /><br /><br /><br />
                <center><input id="ActivationcodeID2" onPaste={CHECK2} onChange={CHECK2} type="password" placeholder="Enter Previous Password" title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required /></center>
                <br /><center><input id="ActivationcodeID3" onPaste={CHECK2} onChange={CHECK2} type="password" placeholder="New PassWord" title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" required /><div id="PswVisibleb">
                  <div id="PV2"><input id="PswVisible2" type="checkbox" onClick={ShowPswd2} /></div><div id="SP1">SHOWPASSWORD</div></div></center><br />
                <a href={url} id="CloseButton" onClick={CLOSE}>CLOSE</a>
                <center><div id="SubmitBG2">
                  <a href={url} id="Submit2" onClick={ConfirmPassword} >CONFIRM</a><div id="Warning2"></div></div></center>

              </div>
            </div>
          </div>
        </div>
        <div id="ConfirmationMessage"><center id="CMtext"><b>SUCCESSFULLY CHANGED PASSWORD!!</b></center></div>
      </div>
    </>
  )
}

