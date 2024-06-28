import conf from "../utils/conf";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

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
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const userSignup = async (data) => {
    const { email, password, confirmPassword } = data;

    try {
      if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
      }
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      alert("Account Created Successfully");
    } catch (error) {
      console.error("Custom Error in Sign up", error);
    }
  };

  const userLogin = async (data) => {
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/groq");
      console.log("Login Successful");
      checkUserStatus();
    } catch (error) {
      console.error("Custom Error in Login", error);
    }
  };

  const userLogout = async () => {
    try {
      await signOut(firebaseAuth);
      console.log("Logout Successful");
    } catch (error) {
      console.error("Custom Error in Logout", error);
    }
  };

  const checkUserStatus = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User Set");
        // console.log(user);
      } else {
        setCurrentUser(null);
      }
    });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  const contextValue = {
    userSignup,
    userLogin,
    userLogout,
    currentUser,
    setCurrentUser,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
