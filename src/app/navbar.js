import React from "react";
import Lin from "./li_co";

const Navbar = ()=>{
   return(
    <div className="text-black text-right mt-8 text-base font-bold mr-20">
    <Lin name ="HOME" link = "./link" />
    <Lin name ="ABOUT" link = "./link" />
    <Lin name ="CONTACT" link = "./link" />
    <Lin name ="MY PROFILE" link = "./link" />
    </div>
   )
}
export default Navbar