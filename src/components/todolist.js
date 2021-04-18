import React, { useState, useEffect } from "react";
// import "../tailwind.css";
import "../basis.css";
import "../styles/loader.css";
import DeleteModal from "./DeleteModal";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputModal from "./InputModal";
import "../styles/animations.css";
import "../styles/normalise.css";



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
                          <div class="mt-3 container px-5 mx-auto">
                              <div class="flex flex-wrap w-full flex-col  items-center text-center">
                                <h1 class="mt-1 text-4xl lg:text-5xl font-medium title-font mb-1 text-white">
                                  To Do Items List
                                </h1>
                                <p class="lg:w-1/2 text-xl w-full leading-relaxed text-opacity-80">
                                  Todo Items given are being loaded via RESTApi. You can add or
                                  delete item.
                                </p>
                              </div>
                              </div>
                              <div className="text-center mt-10">
                              <button
                                                  onClick={() => showInputModal()}
                                                  type="button"
                                                  class="bg-green-200 w-40 h-15 py-3 rounded-full border border-gray-800 text-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                  Add Todo
                                                </button>
                                                </div>
                              
                              {/* Start of Dynamic comments Cards */}
                               {/* <div key={item.id} class="flex-1 flex-wrap align-center md:mx-14 mx-3 p-9"> */}
                              {todoItems.map((item) => {
                                      return (
                                              <div className="flex-container mt-10 mx-auto">
                                              <div key={item.id} class="flex flex-col border border-gray-700 border-opacity-75 p-5 md:p-3 mx-3 md:mx-14 bg-gray-100 rounded-lg">
                                              <div  class="flex space-between ml-2">
                                              
                                              {/* src={require("./image/mypic.png")} */}
                                              {/* src={item.image} */}
                                              
                                              {/* <div class="float-left  text-lg text-black font-medium title-font mb-2">
                                                  {item.id}
                                                </div> */}
                                                    <img
                                                      className="w-14 h-14 rounded-full"
                                                      src={require("./image/mypic.png")}
                                                      alt=""
                                                    ></img>
                                                
                                                
                                                <div className="delete-button ml-3">
                                                <button
                                                  onClick={()=>deletetodoItem(item.id)}
                                                  className="bg-red-300 mt-2 xs:ml-1 w-15 h-10 rounded-lg px-2 border border-gray-800 text-red-500 hover:bg-red-500 hover:text-white"
                                                >
                                                  Delete
                                                </button>
                                                </div>
                                                </div>
                                                <div>
                                                <div className="flex-col flex-grow-0 ml-2 py-2 font-medium text-black">
                                                {item.title}
                                                </div>
                                                </div>
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
