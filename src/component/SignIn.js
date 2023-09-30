import React, { useState, useRef } from "react";
import { validateData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';

function SignIn() {
  const [isLogIn, setIsLogin] = useState(true);
  const [errorMessageShow, setErrorMessageShow] = useState(null);

  const logInHandle = () => {
    // validation
    const message = validateData(email.current.value,password.current.value);
    setErrorMessageShow(message);
    // setIsLogin(!isLogIn);
    if(message) return;

    if(!isLogIn){
      // Sign up form
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
        setErrorMessageShow(errorCode + ' - ' + errorMessage)
        // ..
      });
    }
    else{
      // Sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log( user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessageShow(errorCode + '-' + errorMessage)
      });
    }
  
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const signUpNowHandle =()=>{
    setIsLogin(!isLogIn);
  }

  return (
    <>
      <div className="max-w-md mx-auto pt-24 pb-5">
        <div className="w-full  p-6 bg-purple-200  rounded-lg shadow ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {!isLogIn ? "Sign up" : "Sign in"}
          </h5>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
        {!isLogIn && <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3
              text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
            type="name"
            ref={name}
            placeholder="Name"
          />
        </div>}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3
                  text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                type="email"
                ref={email}
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3
                  text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                type="password"
                ref={password}
                placeholder="Enter Password"
              />
            </div>
            <p className="text-red-600 font-bold mb-3">{errorMessageShow}</p>
            <div className="">
              <button
                onClick={logInHandle}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
             
                {!isLogIn ? "Sign up" : "Sign in"}
              </button>

              <p className="text-black mt-5">
                {isLogIn ? "New to User? " : "Already member? "}
                <span className="cursor-pointer underline" onClick={signUpNowHandle}>
                  {isLogIn ? "Sign up now" : "Sign in"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
