import React from "react";
import "../styles/navbar.css";
import "../tailwind.css";
import lottie from "lottie-web";
import "../styles/modal.css";
import "../styles/doneanimation.css";
import doneAnimation from "../assets/anims/doneanimation.json";


export default function DoneAnimation({showAnim,animSwitch}) {
    React.useEffect(() => {
        lottie.loadAnimation({
            loop: true,
            autoplay:true,
          container: document.querySelector("#done-animation"),
          animationData: doneAnimation
        });
      }, []);
    const showHideClassName = showAnim ? "display-block" : "display-none";
    
    // className="mx-auto p-4 rounded shadow-md">
    return (
        <div  className={showHideClassName}>
            <div id="done-animation" 
             className="doneanimation absolute mx-auto">
            </div>
        </div>
    )
    
}
