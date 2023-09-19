import React from "react";
import FiCa from "./ca_fi";
import wo from "../assets/images/w_s.png"
const Fii = ()=>{
    return(
        <div className="bg-[#F2F2F2]">
            <div className="pt-10"></div>
        <div className="flex flex-row justify-around mt-20 ">
            <FiCa quo = "Where the art of medicine is loved, there is also love for"q2=" humanity" auth = "- Hippocrates " />
            <FiCa quo = "The aim of medicine is to prevent disease and prolong life;"q2=" the ideal of medicine is to eliminate the need of a"q3=" physician." auth = "- William J. Mayo" />
        </div>
        <div className="flex flex-row justify-around mt-32">
            <FiCa quo = "The art of medicine consists in amusing the patient while"q2=" nature cures the disease. Wherever the art of medicine is"q3=" loved." auth = "- ​Frank Clarke" />
            <FiCa quo = "Medicine is not only a science; it is also an art. It does not"q2=" consist of compounding pills and plasters; it deals with the"q3=" very processes of life" auth = "- Elmer Briggs" />
        </div>
        <div className="flex flex-row justify-around mt-32">
            <div className="mt-32">
                <h1 className="text-[4rem]">Create an account</h1>
                <button type="submit" className="text-lg font-bold mt-8  ml-32 pt-4 pb-4 pl-12 pr-12 bg-[#9BAAF9] text-white rounded-[2rem] hover:bg-indigo-500">Login</button>
            </div>
            <img src = {wo} className="w-[31.25rem]" />
        </div>

        </div>
    )
}
export default Fii