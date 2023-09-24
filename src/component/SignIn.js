import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase';
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

function SignIn() {
  const [singin, signinHandle] = useState(true);
  const [errorMessages, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signInHandle = () => {
    // console.log(email.current.value);
    const message = validateData(email.current.value, password.current.value);
    // if message pass valid email and pass, create user
    if(message) return

    if (!singin) {
      // Sign Up form logic
      // createUserWithEmailAndPassword(auth, email, password)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/120715673?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
    
      

    setErrorMessage(message);
    console.log(message);
  };
  // name input enable if user is click on sign up
  const isLoginHandle = () => {
    signinHandle(!singin);
  };
  return (
    <>
     
      <div className="max-w-md mx-auto pt-24 pb-5">
        <div className="w-full  p-6 bg-purple-200  rounded-lg shadow ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {!singin ? "Sign up" : "Sign in"}
          </h5>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {!singin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  name="title"
                  ref={name}
                  className=" appearance-none border rounded w-full py-2 px-3
                  text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                  type="name"
                  placeholder=""
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                name="title"
                ref={email}
                className=" appearance-none border rounded w-full py-2 px-3
                  text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                type="email"
                placeholder=""
              />
             
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                name="title"
                ref={password}
                className=" appearance-none border rounded w-full py-2 px-3
                  text-gray-900 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                type="password"
                placeholder=""
              />
            </div>
            <p className="mb-2 text-red-600 font-bold">{errorMessages}</p>
            <div className="">
              <button
                onClick={signInHandle}
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {!singin ? "Sign up" : "Sign in"}
              </button>

              <p className="text-black mt-5">
                {singin ? "New to User? " : "Already member? "}
                <span
                  onClick={isLoginHandle}
                  className="cursor-pointer underline"
                >
                  {singin ? "Sign up now" : "Sign in"}
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
