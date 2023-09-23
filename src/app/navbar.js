import React from "react";
import Lin from "./li_co";

const Navbar = () => {
   return (
      <div className="flex flex-row-reverse text-black text-right mt-2 text-base font-bold pt-2 pb-3 sticky top-0 bg-white">
         <Lin name="MY PROFILE" link="./profile" />
         <Lin name="TEST" link="./test" />
         <Lin name="ABOUT" link="./about" />
         <Lin name="HOME" link="./" />



      </div>
   )
}
export default Navbar