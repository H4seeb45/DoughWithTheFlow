import React, { useState, useEffect } from "react";
import "../tailwind.css";
import "../basis.css";
import "../styles/loader.css";
import DeleteModal from "./DeleteModal";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputModal from "./InputModal";
import "../styles/animations.css";
import "../styles/normalise.css"


export default function todolist() {
  // const [imageObj, setImageId] = useState({
  //   imageId: null,
  //   todoId: null,
  // });
  const [todoItems, setItems] = useState([]); //todo items objects and function to set them.
  let [isLoaded, setIsLoaded] = useState(false); //isloaded variable to control loading animation
  let [modalShow, setModalShow] = useState(false); //modalshow variable to control modal confirmation dialogue
  const [alertOpen, setAlertOpen] = useState(false); //open variable to set alert open or close.
  const [err, setErr] = useState(null); // variable for error handling
  const [varInputModal, setInputModal] = useState(false);
  // function to show alerts
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  // Function to show modal for confirming item deletion.
  const deletetodoItem=(deleteId) => {
    setModalShow(true); //setting modalShow variable to true to show modal.
    localStorage.setItem("id", deleteId);
  };

  //   Function for hiding modal !setModal of state is being called 
  function hideModal() {
    setModalShow(false);
  }

  //function to show Delete Alert.
  const showAlert = () => {
    setAlertOpen(true);
  };
  //function to close Delete Alert.
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  
  function showInputModal() {
    setInputModal(true);
  }
  function hideInputModal() {
    setInputModal(false);
  }
  useEffect(() => {
    //fetch method getting items from jasonplaceholder api.
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // Unfortunately, fetch doesn't send (404 error)
        // into the cache itself
        // You have to send it, as I have done below
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return res.json();
      })
      .then(
        (todoObjects) => {
          
          //filtering items because of light rendering and setting them as todoobjects.
          setItems(todoObjects.filter((object) => object.id <= 11));
          
          setIsLoaded(true);
        },
        (err) => {
          err.message="Failed to connect"
          setErr(err);
        }
      );
  }, [1]);
  if (err) {
    //if there is any error show this screen
    return (<div className="w-50 mx-auto p-20 animRight">
             <div className="flex mx-auto bg-red-500 p-2 rounded text-center">
             Application Error: {err.message}. Please check your internet connection and try again.
             </div>   
            </div>);
    //if isLoaded varibale is false it means content is still loading
  } else if (!isLoaded) {
    return (
      <div class="loader">
        <div class="loadercontainer">
          <div class="loaderdiv loaderyellow"></div>
          <div class="loaderdiv loaderred"></div>
          <div class="loaderdiv loaderblue"></div>
          <div class="loaderdiv loaderviolet"></div>
        </div>
      </div>
    );
    //main div shwoing todo items
  } else {
    return (
      <div>
            <InputModal
              show={varInputModal}
              handleClose={hideInputModal}
              setItems={setItems}
            ></InputModal>
            {/* bg-gray-900 */}
            <section class="text-gray-400">
                          <div class="container px-5 py-5 mx-auto">
                              <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                                  To Do Items List
                                </h1>
                                <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                                  Todo Items given are being loaded via RESTApi. You can add or
                                  delete item.
                                </p>
                              </div>
                              </div>
                              
                              {/* Start of Dynamic comments Cards */}
                              {todoItems.map((item) => {
                                      return (
                                          <div key={item.id} class="flex align-start space-between md:mx-14 my-2 p-5 lg:py-3 lg:px-11">
                                            <div class="w-xl md:w-full p-2">
                                              <div class="flex border border-gray-700 border-opacity-75 p-2 bg-gray-100 rounded-lg">

                                                  <div class="flex-none bg-black w-14 h-14 bg-gray-800">
                                                    <img
                                                      src={require("./image/mypic.png")}
                                                      alt=""
                                                      className="rounded-full lg:rounded-none"
                                                    ></img>
                                                  </div>
                                                <button
                                                  onClick={() => showInputModal()}
                                                  type="button"
                                                  class="bg-green-200 ml-2 xs:ml-1 xs:w-10 w-15 h-10 inline-block rounded px-2 border border-gray-800 text-green-500 hover:bg-green-500 hover:text-white hover:ring-indigo-500 hover:ring-offset-indigo-200"
                                                >
                                                  Add
                                                </button>
                                                <button
                                                  onClick={()=>deletetodoItem(item.id)}
                                                  class="bg-red-300 xs:ml-1 ml-3 w-15 h-10 inline-block rounded px-2 border border-gray-800 text-red-500 hover:bg-red-500 hover:text-white"
                                                >
                                                  Delete
                                                </button>
                                                <div class="absolute text-lg text-black font-medium title-font mb-2">
                                                  {item.id}
                                                </div>
                                                
                                              </div>
                                              <div><p className="font-medium">{item.title}</p></div>
                                            </div>
                                            
                                          </div>
                                              );
                                                      }
                                        )
                            }
                          <Snackbar open={alertOpen} autoHideDuration={4000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success">
                              Item Deleted Successfuly.
                            </Alert>
                          </Snackbar>
                          
            </section>
            
            <DeleteModal
              show={modalShow}
              handleClose={hideModal}
              setTodos={setItems}
              showAlert={showAlert}
            ></DeleteModal>
      </div>
      
    );
  }
}
