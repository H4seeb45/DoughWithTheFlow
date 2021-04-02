import React, { useState, useEffect } from 'react'
import "../tailwind.css"
import "../basis.css"
import "../styles/loader.css"
import DeleteModal from "./DeleteModal"

export default function todolist() {

     const [todoItems,setItems] = useState([]);
     let [isLoaded, setIsLoaded] = useState(false);
     let [modalShow, setModalShow] = useState(false);
     const [err,setErr]=useState(null);
     var deleteId=1;
    //  Function forshowing modal
     function showModal(){
        setModalShow(true);
      };
    //   Function for hiding modal
      function hideModal() {
        setModalShow(false);
      };
      function deleteTodoModal(id){
        showModal();
        deleteId=id;
        localStorage.setItem("id",deleteId);
            
        }
      function deleteItem(){
        deleteId=localStorage.getItem("id");
        var elementPos = todoItems.findIndex(function (item) {
            return item.id == deleteId;    
        })
        todoItems.splice(elementPos, 1);
        hideModal();
      }
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
        .then(todoObjects => {
            setItems(todoObjects.filter(object => object.id<=11))
            setIsLoaded(true)
         },
        err => {
            setErr(err)
        })
      },[1])


      if (err) {
        return <div> {err.message} </div>
    } else if (!isLoaded) {
        return(
        <div class="loader">
        <div class="loadercontainer">
        <div class="loaderdiv loaderyellow"></div>
        <div class="loaderdiv loaderred"></div>
        <div class="loaderdiv loaderblue"></div>
        <div class="loaderdiv loaderviolet"></div>
        </div>
        </div>
    )
    } else {
        return (
            
            // <div className="relative">
            // <div className="text-3xl text-center md:m-5 mt-5 bg-blue-600 rounded shadow-sm">Todos List</div>
            // <div className="text-red-500 m-5">*Todo Items have been loaded via RESTApi. You can add and delete new items. These Items will reset on page reload</div>
            // <div >
            // <button class="relative p-2 md:ml-80 mt-2 transition duration-500 ease-in-out bg-green-600 hover:bg-blue-700 rounded shadow-lg transform hover:-translate-y-1 hover:scale-110 ...">
            // Add Item
            // </button>
            // <button onClick={() => handleDeleteClick()} class="p-2 ml-4 mt-2 transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 rounded shadow-lg transform hover:-translate-y-1 hover:scale-110 ...">
            // Delete Item
            // </button>
            // </div>
            // {/* <div className="relative flex flex-wrap flex-row justify-around align-center md:space-x-2"> */}
            // <div className="flex md:flex-1 flex-base  flex-wrap justify-between md:flex-1 md:space-x-10">
            // <div className="md:ml-10"></div>
            // {     
            // todoItems.map(item => {
    
            // return(    
            // <div className="p-2 md:p-4 mt-5 bg-white align-center shadow-md rounded-lg">
            // <div className="absolute p-1 mt-0 bg-blue-600 rounded-md text-xs">
            // ID:{item.id} 
            // </div>
            // <div className="float-left ml-10">
            //    <div>
            //     <img src={require('./image/mypic.png')} alt="" className="absolute float-left w-11 h-11 rounded-full block"></img>
            //     </div>
            //     <span className="block mt-12 text-blue-500 ">User ID:{item.userId}</span>
            // </div>      
            // <div className="float-right ml-12"><span className="text-xs">{item.title}</span></div>
            // </div> 
            // )
            // })
            // }
            // </div>
            // </div> 
    <div> 
    <DeleteModal show={modalShow} handleClose={hideModal} delItem={deleteItem}></DeleteModal>
     <section class="text-gray-400 bg-gray-900">
     
        <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">To Do Items List</h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">Todo Items given are being loaded via RESTApi. You can add or delete item.</p>
            </div>
            {/* Start of Dynamic comments Cards */}
            {     
            todoItems.map(item => {
                return(
            <div key={item.id} class="flex-0 flex-wrap m-4">
                    <div class="xl:w-full md:w-20 p-4">
                            <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400">          
                                <img src={require('./image/mypic.png')} alt="" className="rounded-full"></img>
                            </div>
                            <button type="button"
                             class="absolute ml-5 w-15 h-10 inline-flex rounded p-2 border border-gray-800 text-green-500 hover:bg-green-500 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200">
                             Add
                             </button>
                            <button onClick={() => deleteTodoModal(item.id)}
                             class="absolute ml-20 w-15 h-10 inline-flex rounded p-2 border border-gray-800 text-red-500 hover:bg-red-500 hover:text-white">
                             Delete
                             </button>
                                <h2 class="text-lg text-white font-medium title-font mb-2">{item.id}</h2>
                                <p class="leading-relaxed text-base">{item.title}</p>
                           </div>
                    </div>
              </div>
                )
            }
            )
            }
             
            </div> 
           </section>
            </div> 
        
          )
    }   
    }