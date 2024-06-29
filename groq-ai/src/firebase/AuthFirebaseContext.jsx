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
import AuthLoader from "../components/AuthLoader";
import WebsiteLoader from "../components/WebsiteLoader";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  const [authLoader, setAuthLoader] = useState(false);
  const [webLoader, setWebLoader] = useState(true);
  const navigate = useNavigate();

  const userSignup = async (data) => {
    setAuthLoader(true);
    const { email, password, confirmPassword } = data;

    try {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match.");
        setAuthLoader(false);
        return;
      }
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/login");
    } catch (error) {
      // console.error("Custom Error in Sign up", error);
      toast.error("Error creating account. Please try again.");
    } finally {
      setAuthLoader(false);
    }
  };

  const userLogin = async (data) => {
    setAuthLoader(true);
    const { email, password } = data;

    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/groq");
      checkUserStatus();
    } catch (error) {
      // console.error("Custom Error in Login", error);
      toast.error("Error logging in. Please check your credentials.");
    } finally {
      setAuthLoader(false);
    }
  };

  const userLogout = async () => {
    setAuthLoader(true);
    try {
      await signOut(firebaseAuth);
      toast.success("Logout Successful");
    } catch (error) {
      // console.error("Custom Error in Logout", error);
      toast.error("Error logging out. Please try again.");
    } finally {
      setAuthLoader(false);
    }
  };

  const checkUserStatus = () => {
    setWebLoader(true);
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setWebLoader(false);
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
      <ToastContainer />
      {authLoader ? (
        <AuthLoader />
      ) : webLoader ? (
        <WebsiteLoader />
      ) : (
        props.children
      )}
    </FirebaseContext.Provider>
  );
};
