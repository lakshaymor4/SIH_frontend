import React from "react";
import Navbar from "./navbar";
import Pr_ma from "./prof_main";
import Pro_ca from "./prof_card";
import pill from "../assets/images/pill.png"
import win from "../assets/images/win.png"
import cal from "../assets/images/cal.png"
import fol from "../assets/images/fol.png"
import Foot from "./foot";
const Prof = ()=>{
    return(
        <>
        <Navbar />
        <div className="bg-[#536CF5]">
        
        <Pr_ma />
        <div className="flex flex-col justify-around items-center mt-10 pb-10">
        <div className="flex flex-row ">
        <Pro_ca im = {pill} te ="Current Prescription" li = "/more"  />  
        <Pro_ca im = {cal} te ="Set Reminder" li ="/more"  />  
        </div>
        <div className="flex flex-row  mt-8">
        <Pro_ca im = {fol} te = "Patient history" li ="/more"  />  
        <Pro_ca im = {win} te ="Advice section" li ="/more"  />  
        </div>
        </div>
        </div>
        <Foot />

        </>
    )
}
export default Prof
