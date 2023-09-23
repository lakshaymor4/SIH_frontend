import React from "react";
import ReactDOM from "react-dom/client";
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

import ErrorBoundary from "./app/err";
import Loc from "./app/propic";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,


    },

    {
        path: "/profile",
        element: <ErrorBoundary />
    }, {
        path: "/test",
        element: <ErrorBoundary />
    }, {
        path: "/about",
        element: <ErrorBoundary />
    }, {
        path: "/login",
        element: <Loc />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);