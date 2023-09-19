import React from "react";

const FiCa = (props)=>{
    const {quo,q2,q3 , auth} = props
    return(
        <div className="pt-20 pb-10 pl-10 pr-10 bg-white max-w-max rounded-[3rem]">
            <h1 className="break-words text-xl ">{quo}<br />{q2}<br />{q3}</h1>
            <h2 className="text-[#536CF5] font-bold mt-4 text-lg">{auth}</h2>
        </div>
    )
}
export default FiCa