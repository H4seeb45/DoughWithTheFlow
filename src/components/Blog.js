import React, { Component } from "react";
import configureStore from "../dux/configureStore";
import { todoAdded } from "../dux/todos";
import { userAdded } from "../dux/users";
import "../styles/blog.css";
export default class Blog extends Component {
  render() {
    let Store = configureStore();
    Store.dispatch(
      todoAdded({
        description: "asdasdasd",
        resolved: false,
        createdBy: "Haseeb Ahmed",
        assigned: "none",
      })
    );
    Store.dispatch(
      userAdded({
        name: "Haseeb Ahmed",
        banned: "false",
        createdBy: "Admin",
        userRole: "undefined",
      })
    );
    Store.dispatch(
      userAdded({
        type: "error",
        message: "error",
      })
    );
    return (
      <div className="min-h-screen blog-ctn">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mt-5">
          {/* First Card */}
          <div className="md:p-8 p-2 bg-white rounded-lg shadow-md blog-card hover:bg-blue-200">
            {/* Banner Image */}
            <img
              className="rounded-lg w-full"
              alt="blog main"
              src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
        "
            />

            {/* Tag */}
            <p className="text-indigo-500 font-semibold text-base mt-2">
              Science
            </p>
            {/*}--Title-->*/}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              the life of albert einstein
            </h1>
            {/* Description */}
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              {/* Authors Profile */}
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="random user"
              />
              <div>
                {/*--Author name-->*/}
                <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                <p className="text-gray-500 font-semibold text-sm">
                  Feb 24,2021 &middot; 6 min read
                </p>
              </div>
            </div>
          </div>
          {/*--End of first card-->*/}

          {/*--Second Tag-->*/}
          <div className="p-8 bg-white rounded-lg shadow-md blog-card hover:bg-blue-200">
            {/*--Banner image-->*/}
            <img
              className="rounded-lg w-full"
              alt="blog main"
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80
        "
            />
            {/*--Tag--> */}
            <p className="text-indigo-500 font-semibold text-base mt-2">
              Startup stories
            </p>
            {/* <!--Title--> */}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              The rise of facebook
            </h1>
            {/* <!--Description--> */}
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              {/* <!--Author's profile photo--> */}
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="random user"
              />
              <div>
                {/* Author Name */}
                <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                <p className="text-gray-500 font-semibold text-sm">
                  Feb 24,2021 &middot; 6 min read
                </p>
              </div>
            </div>
          </div>
          {/* End Of Second Card */}

          {/* <!--Third  card--> */}
          <div className="p-8 bg-white rounded-lg shadow-md blog-card hover:bg-blue-200">
            {/* <!--Banner image--> */}
            <img
              className="rounded-lg w-full object-cover object-center"
              alt="blog"
              src="
      https://images.unsplash.com/photo-1580867532901-7e3707f178ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80"
            ></img>
            {/* Tag */}
            <p className="text-indigo-500 font-semibold text-base mt-2">
              Culture
            </p>
            {/* Title */}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              the life of masaai people from tanzania
            </h1>
            {/* Description */}
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              {/* Authors Profile Photo */}
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="random user"
              />
              <div>
                {/* <!--Author name--> */}
                <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                <p className="text-gray-500 font-semibold text-sm">
                  Feb 24,2021 &middot; 6 min read
                </p>
              </div>
            </div>
          </div>

          {/* First Card */}
          <div className="md:p-8 p-2 bg-white rounded-lg shadow-md blog-card hover:bg-blue-200">
            {/* Banner Image */}
            <img
              className="rounded-lg w-full"
              alt="blog main"
              src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
        "
            />

            {/* Tag */}
            <p className="text-indigo-500 font-semibold text-base mt-2">
              Science
            </p>
            {/*}--Title-->*/}
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              the life of albert einstein
            </h1>
            {/* Description */}
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              {/* Authors Profile */}
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://randomuser.me/api/portraits/men/54.jpg"
                alt="random user"
              />
              <div>
                {/*--Author name-->*/}
                <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                <p className="text-gray-500 font-semibold text-sm">
                  Feb 24,2021 &middot; 6 min read
                </p>
              </div>
            </div>
          </div>
          {/*--End of first card-->*/}
        </div>
      </div>
    );
  }
}
