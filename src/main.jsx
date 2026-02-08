import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // tailwind yahan import hoti hai
import UserContext from "./Context/UserContext.jsx";
import { Provider } from "react-redux";
import {store} from './redux/Store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <UserContext>
    <App />
    </UserContext>
    </Provider>
  
);

