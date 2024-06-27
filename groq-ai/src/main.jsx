import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./utils/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./firebase/AuthFirebaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
