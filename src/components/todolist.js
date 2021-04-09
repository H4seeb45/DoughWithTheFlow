import React, { useState, useEffect } from "react";
import "../tailwind.css";
import "../basis.css";
import "../styles/loader.css";
import DeleteModal from "./DeleteModal";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import InputModal from "./InputModal";
import "../styles/animations.css"


export default function todolist() {
  const [imageObj, setImageId] = useState({
    imageId: null,
    todoId: null,
  });
  const [todoItems, setItems] = useState([]); //todo items objects and function to set them.
  let [isLoaded, setIsLoaded] = useState(false); //isloaded variable to control loading animation
  let [modalShow, setModalShow] = useState(false); //modalshow variable to control modal confirmation dialogue
  const [open, setOpen] = useState(false); //open variable to set alert open or close.
  const [err, setErr] = useState(null); // variable for error handling
  const [varInputModal, setInputModal] = useState(false);
  var deleteId = 1;
  // function to show alerts
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  // function to add image id in state
  function addImageId(imgid, tid) {
    setImageId({ imageId: imgid, todoId: tid });
  }
  //function to show Alert.
  const showAlert = () => {
    setOpen(true);
  };
  //function to close Alert.
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //  Function forshowing modal
  function showModal() {
    setModalShow(true);
  }
  //   Function for hiding modal
  function hideModal() {
    setModalShow(false);
  }
  function showInputModal() {
    setInputModal(true);
  }
  function hideInputModal() {
    setInputModal(false);
  }
  // Function to show modal for confirming item deletion.
  function deleteTodoModal(id) {
    showModal();
    deleteId = id;
    localStorage.setItem("id", deleteId);
  }
  // actual function to delete the todo Item.
  function deleteItem() {
    deleteId = localStorage.getItem("id");
    var elementPos = todoItems.findIndex(function (item) {
      console.log(typeof(deleteId));
      return item.id === deleteId;
    });
    todoItems.splice(elementPos, 1);
    hideModal();
    showAlert();
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
             <div className="flex mx-auto bg-red-500 p-2 rounded text-center">Application Error: {err.message}. Please check your internet connection and try again.</div> 
               
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
        <DeleteModal
          show={modalShow}
          handleClose={hideModal}
          delItem={deleteItem}
        ></DeleteModal>
        <InputModal
          show={varInputModal}
          handleClose={hideInputModal}
        ></InputModal>
        <section class="text-gray-400 bg-gray-900">
          <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                To Do Items List
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">
                Todo Items given are being loaded via RESTApi. You can add or
                delete item.
              </p>
            </div>
            {/* Start of Dynamic comments Cards */}
            {todoItems.map((item) => {
              return (
                <div key={item.id} class="flex-0 flex-wrap m-4">
                  <div class="xl:w-full md:w-20 p-4">
                    <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400">
                        <img
                          src={require("./image/mypic.png")}
                          alt=""
                          className="rounded-full"
                        ></img>
                      </div>
                      <button
                        onClick={() => showInputModal()}
                        type="button"
                        class="absolute ml-5 w-15 h-10 inline-flex rounded p-2 border border-gray-800 text-green-500 hover:bg-green-500 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => deleteTodoModal(item.id)}
                        class="absolute ml-20 w-15 h-10 inline-flex rounded p-2 border border-gray-800 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        Delete
                      </button>
                      <h2 class="text-lg text-white font-medium title-font mb-2">
                        {item.id}
                      </h2>
                      <p class="leading-relaxed text-base">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Item Deleted Successfuly.
            </Alert>
          </Snackbar>
        </section>
      </div>
    );
  }
}
