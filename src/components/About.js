import React from "react";
import "../tailwind.css";
export default class NavBar extends React.Component {
  render() {
    return (
      <div>
      {/* <img src= alt="img" width="384" height="512"/> */}
        {/* <div className="mx-50 max-w-3xl mx-auto my-4 flex justify-center bg-white border rounded-2xl md:p-0 shadow-xl"> */}
          <div className="mt-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg">
          <div className="md:align-items-center">
          <img src={require('./image/mypic.png')} alt="" className="h-15 w-15 p-2 ml-4 md:block rounded-full" width="300" height="300"/>
          </div>
          <div className="pt-6 pl-5 md:p-8 md:mt-50 text-left space-y-4">
          <h1>A Learning Frontend Developer on his path to do what he loves and making 
          an impact by developing websites that really work.</h1> 
          <div class="text-blue-600 mt-60" >
            Haseeb Ahmed
          </div>
          <div class="inline text-gray-400 mt-80" >
            Frontend Developer
          </div>
          </div>
        </div>
        
      </div>
    );
  }
}
