import React from "react"
import Navbar from "./navbar"
const  ErrorBoundary =()=>{
    return(
        <>
        <Navbar />
        <div>Dang!!!</div>
        </>
    )
}
export default ErrorBoundary