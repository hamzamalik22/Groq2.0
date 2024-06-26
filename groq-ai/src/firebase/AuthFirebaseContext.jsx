import conf from "../utils/conf";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { Context } from "../utils/Context";

const firebaseConfig = {
  apiKey: conf.firebaseApiKey,
  authDomain: conf.firebaseAuthDomain,
  projectId: conf.firebaseProjectId,
  storageBucket: conf.firebaseStorageBucket,
  messagingSenderId: conf.firebaseMessagingSenderId,
  appId: conf.firebaseAppId,
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const userSignup = (data) => {
    const { email, password, confirmPassword } = data;

    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match..");
        return;
      } else {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
        alert("Account Created Successfully");
      }
    } catch (error) {
      console.error("Custom Error in Sign up", error);
    }
  };

  const userLogin = (data) => {
    const { email, password } = data;

    try {
      signInWithEmailAndPassword(firebaseAuth, email, password);
      console.log("login Successful");
    } catch (error) {
      console.error("Custom Error in Login", error);
    }
  };

  const userLogout = (data) => {
    try {
      signOut(firebaseAuth);
      console.log("logout Successful");
    } catch (error) {
      console.error("Custom Error in logout", error);
    }
  };

  const contextValue = {
    userSignup,
    userLogin,
    userLogout,
  }

  return <FirebaseContext.Provider value={contextValue} >{props.children}</FirebaseContext.Provider>;
};

