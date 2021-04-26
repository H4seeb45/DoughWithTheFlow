import React from "react";

// import combineReducers from "./../dux/reducer";

export default function Signin(props) {
  let handleSignIn = (event) => {
    event.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (
      email.value === "ahmed.haseeb56@gmail.com" &&
      password.value === "123"
    ) {
      console.log("in redirect00");
      localStorage.setItem("email", email.value);
      props.history.replace("/ToDo");
    }
  };
  return (
    <section className="min-h-screen flex flex-col bg-blue-500">
      <div className="flex flex-1 items-center justify-center ">
        <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center bg-gray-300">
          <form className="text-center">
            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-blue-500">
              Sign in
            </h1>
            <div id="wrongtext" class="text-md mb-8 w-full text-gray-600">
              Username: ahmed.haseeb56@gmail.com Password:123
            </div>
            <div className="py-2 text-left">
              <input
                id="email"
                type="email"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Email"
              />
            </div>
            <div class="py-2 text-left">
              <input
                id="password"
                type="password"
                className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                placeholder="Password"
              />
            </div>
            <div class="py-2">
              <button
                onClick={handleSignIn}
                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
              >
                Sign In
              </button>
            </div>
          </form>
          <div class="text-center">
            <a href="/SignIn" className="hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="text-center mt-12">
            <span>Don't have an account? </span>
            <a
              href="/SignIn"
              className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
            >
              Create One
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
