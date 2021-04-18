import React from "react";
import "../tailwind.css";
import "../styles/animations.css";
import AboutAnimation from "../assets/anims/laptopwork.json";
import lottie from "lottie-web";
import "../styles/aboutanim.css";
export default function About () {
  React.useEffect(() => {
    lottie.loadAnimation({
        loop: true,
        autoplay:true,
      container: document.querySelector("#about-animation"),
      animationData: AboutAnimation
    });
  }, []);
    return (
      <div>
      {/* <span className="namespan absolute space-y-3">Haseeb Ahmed</span> */}
           


          {/* Parent Component */}
          <div className="about-ctn mx-auto">
          <div className="font-mono px-5 mx-auto mt-3 flex flex-grow-0 flex-row max-w-3xl bg-gray-100 rounded-xl md:p-0 shadow-md hover:shadow-xl border-2 border-blue-600 animLeft">
          {/* Child Components */}
          <div className="">
          <img src={require("./image/mypic.png")} alt="" className="h-15 w-15 m-2 ml-2 md:block rounded-full border border-2 border-black" width="300" height="300"/>
          </div>
          <div className="md:pt-5 pl-5 animBottom">
          <h1>A Learning Frontend Developer on his path to do what he loves and making 
          an impact by developing websites that really work.</h1> 
          <div class="pt-5 text-blue-600 mt-auto" >
            Haseeb Ahmed
          </div>
          <div className="flex flex-row">
          <div class="inline text-gray-400" >
            Frontend Developer<br/>
            0300-0769059           
          </div>
          <div id="about-animation"  className="inline about-anim"></div>
          </div>
          </div>
         
        </div>

          </div>
          
        
      </div>
    );
  }

