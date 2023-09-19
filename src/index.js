import React from "react";
import  ReactDOM  from "react-dom/client";
import Navbar from "./app/navbar";
import "./index.css"
import First from "./app/first";
import Seco from "./app/seco";
import Th from "./app/thir";
import Thi from "./app/th2";
import Four from "./app/fo";
const Mainn=()=>{
return(
    <>
    <Navbar />
    <First/>
    <Seco />
    <Th />
    <Thi />
    <Four />
    </>
)

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Mainn />)