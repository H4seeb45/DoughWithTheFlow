import React from "react";
import "../tailwind.css";
import "../styles/animations.css"
export default class About extends React.Component {
  render() {
    return (
      <div>
          {/* Parent Component */}
          <div className="relative mx-auto mt-3 flex flex-row max-w-3xl bg-gray-100 rounded-xl p-6 md:p-0 shadow-md hover:shadow-xl border-2 border-blue-600 animLeft">
          {/* Child Components */}
          <div className="">
          <img src={require('./image/mypic.png')} alt="" className="h-15 w-15 m-2 ml-2 md:block rounded-full border border-2 border-black" width="300" height="300"/>
          </div>
          <div className="md:pt-5 pl-5">
          <h1>A Learning Frontend Developer on his path to do what he loves and making 
          an impact by developing websites that really work.</h1> 
          <div class="pt-5 text-blue-600 mt-auto" >
            Haseeb Ahmed
          </div>
          <div class="inline text-gray-400 mt-80" >
            Frontend Developer<br/>
            0300-0769059           
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}
