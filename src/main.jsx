import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // tailwind yahan import hoti hai
import UserContext from "./Context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
    </UserContext>
  
);

