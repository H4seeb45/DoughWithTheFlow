import React from 'react'
import "../tailwind.css"

export default function todolist() {
    return (
        <div className="flex flex-wrap space-evenly m-auto space-x-2 place-content-center" width="80%">
        <div className="p-9 mt-5 bg-white shadow-md rounded-lg">
           <div className="float-left justify-center">
            <img src={require('./image/mypic.png')} width="200px" heigh="200px" alt="" className="float-left  w-12 h-12 rounded-full justify-start block"></img>
            <span className="block mt-12 text-blue-500 ">Haseeb</span>
            </div>
            <span className="float-right ml-3">this is a sample comment that I wrote and its working</span>
            
        </div>
        {/* <div className="p-9 mt-5 bg-white shadow-md rounded-lg">
            <img src={require('./image/mypic.png')} width="200px" heigh="200px" alt="" className="ml-2 w-17 h-17 rounded-full justify-start inline-block"></img>
            <span className="ml-12">Hello Sample Div</span>
        </div> */}
        </div>
    )
}
