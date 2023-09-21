import React from "react";
import  ReactDOM  from "react-dom/client";
import Home from "./app/home";
import "./index.css"
import Fom from "./app/sympt";
import Prof from "./app/profile";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/profile",
        element:<Prof />
    },{
        path:"/test",
        element:<Fom />
    } 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);