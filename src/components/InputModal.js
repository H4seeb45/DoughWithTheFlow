import React from 'react'
import "../styles/navbar.css"
import "../tailwind.css"
import "../styles/modal.css"
// import "./modalscript"

function UploadImage(){

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            console.log("Function called.")
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            console.log(img.src)
            // setState({ selectedFile: files[0] })
        }
    });
}

export default function InputModal({show,handleClose}) {
//     const [imageObj, setImageId] = useState({
//     imageId: null,
//     todoId: null
//   });
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
             <section className="modal-main">
                {/* Input Modal Content */}
                <div>
                <div class="mx-auto">
                                {/* <div class="md:col-span-1">
                                            <div class="px-4 sm:px-0">
                                                <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                                <p class="mt-1 text-sm text-gray-600">
                                                This information will be displayed publicly so be careful what you share.
                                                </p>
                                            </div>
                                </div> */}
                    <div class="mt-5 md:mt-0 flex justify-center align-center">
                    {/* method="POST" */}
                    <form action="#">
                        <div class="shadow sm:rounded-md sm:overflow-hidden text-blue-600"> 
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <h1 class="text-lg text-center">Add Todo Item</h1>
                            <div>
                            <label htmlFor="about" class="block text-sm font-medium text-gray-700">
                                Todo Item Description
                            </label>
                            <div class="mt-1">
                                <textarea id="about" name="about" rows="3" class="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="I will do a simple task tomorrow."></textarea>
                            </div>
                            {/* <p class="mt-2 text-sm text-gray-500">
                                Brief description for your profile. URLs are hyperlinked.
                            </p> */}
                            </div>

                            <div>
                            <label class="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <div class="mt-1 flex items-center">
                                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img src={require('./image/mypic.png')} alt="Profile"></img>
                                </span>
                                {/* <label id="filelabel" class="none ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Label Name
                                </label> */}
                            </div>
                            </div>

                            <div>
                            <label class="block text-sm font-medium text-gray-700">
                                Change Todo Photo
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                    <label htmlFor="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input onClick={UploadImage} id="file-upload" multiple={false} name="filename" type="file" class="sr-only"></input>
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button class="inline-flex mr-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                            </button>
                            <button  onClick={handleClose} class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Cancel
                            </button>
                        </div>
                        </div>  
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}
