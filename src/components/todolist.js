import React, { useState, useEffect } from 'react'
import "../tailwind.css"
import "../basis.css"

export default function todolist() {
    const [todoItems,setItems] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);
    const [err,setErr]=useState(null);
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            // Unfortunately, fetch doesn't send (404 error)
            // into the cache itself
            // You have to send it, as I have done below
            if (res.status >= 400) {
                throw new Error("Server responds with error!")
            }
            return res.json()
        })
        .then(response => response.json())
        // .then(todoObjects => setItems(todoObjects))
        .then(todoObjects => {setItems(todoObjects.filter(object =>object.id<=11))},
        err => {
            setErr(err)
        })
      },[1])

      function handleDeleteClick(){
       console.log("delete button clicked")
      }

      if (err) {
        return <div> {err.message} </div>
    } else if (!isLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <div className="relative">
            <div className="text-3xl text-center md:m-5 mt-5 bg-blue-600 rounded shadow-sm">Todos List</div>
            <div className="text-red-500 m-5">*Todo Items have been loaded via RESTApi. You can add and delete new items. These Items will reset on page reload</div>
            <div >
            <button class="relative p-2 md:ml-80 mt-2 transition duration-500 ease-in-out bg-green-600 hover:bg-blue-700 rounded shadow-lg transform hover:-translate-y-1 hover:scale-110 ...">
            Add Item
            </button>
            <button onClick={() => handleDeleteClick()} class="p-2 ml-4 mt-2 transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 rounded shadow-lg transform hover:-translate-y-1 hover:scale-110 ...">
            Delete Item
            </button>
            </div>
            {/* <div className="relative flex flex-wrap flex-row justify-around align-center md:space-x-2"> */}
            <div className="flex md:flex-1 flex-base  flex-wrap justify-between md:flex-1 md:space-x-10">
            <div className="md:ml-10"></div>
            {     
            todoItems.map(item => {
    
            return(    
            <div className="p-2 md:p-4 mt-5 bg-white align-center shadow-md rounded-lg">
            <div className="absolute p-1 mt-0 bg-blue-600 rounded-md text-xs">
            ID:{item.id} 
            </div>
            <div className="float-left ml-10">
               <div>
                <img src={require('./image/mypic.png')} alt="" className="absolute float-left w-11 h-11 rounded-full block"></img>
                </div>
                <span className="block mt-12 text-blue-500 ">User ID:{item.userId}</span>
            </div>      
            <div className="float-right ml-12"><span className="text-xs">{item.title}</span></div>
            </div> 
            )
            })
            }
            </div>
            </div>     
        )
    }   
    }