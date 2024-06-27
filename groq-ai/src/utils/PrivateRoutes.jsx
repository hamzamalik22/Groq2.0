import React, { useContext } from "react";
import { useFirebase } from "../firebase/AuthFirebaseContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { currentUser } = useFirebase();

  return currentUser !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
