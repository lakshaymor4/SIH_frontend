import React from "react";
import Lin from "./li_co";
import logo from "../assets/images/logo2web.png"

const Navbar = () => {
   return (
      <>
         <div className="flex flex-row justify-between sticky top-0 bg-white">
            <img src={logo} alt="Logo" className="logowebsite" />
            <span class="flex flex-row text-3xl absolute left-20 top-5 h-20 w-20 dark:text-black font-bold">OptiMed</span>
            <div className="flex flex-row-reverse text-black text-right mt-2 text-base font-bold pt-2 pb-3 sticky top-0 bg-white">
               <Lin name="MY PROFILE" link="./profile" />
               <Lin name="TEST" link="./test" />
               <Lin name="ABOUT" link="./about" />
               <Lin name="HOME" link="./" />

            </div>

         </div>
      </>
   )
}
export default Navbar