import React from "react";
import Lin from "./li_co";

const Navbar = ()=>{
   return(
    <div className="text-black text-right mt-2 text-base font-bold mr-20 pb-8">
    <Lin name ="HOME" link = "./" />
    <Lin name ="ABOUT" link = "./about" />
    <Lin name ="TEST" link = "./test" />
    <Lin name ="MY PROFILE" link = "./profile" />
    </div>
   )
}
export default Navbar