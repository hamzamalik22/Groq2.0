import { auth } from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const userSignup = (data) => {
  const { email, password, confirmPassword } = data;

  try {
    if (password !== confirmPassword) {
      alert("Passwords don't match..");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully");
    }
  } catch (error) {
    console.error("Custom Error in Sign up", error);
  }
};

export const userLogin = (data) => {
  const { email, password } = data;

  try {
    signInWithEmailAndPassword(auth, email, password);
    console.log("login Successful");
  } catch (error) {
    console.error("Custom Error in Login", error);
  }
};
