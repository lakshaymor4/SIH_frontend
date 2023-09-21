import React from "react";
import profile from "../assets/images/profile.jpg"
const Pr_ma = ()=>{
    return(
        <div className="flex flex-col items-center pt-44">
            <img src={profile} className="rounded-[30rem] w-[8.5rem] " />
            <h1 className="font-semibold text-[3.5rem] text-white" >My Profile</h1>
        </div>
    )
}
export default Pr_ma