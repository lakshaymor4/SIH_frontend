import React from "react";

const Pro_ca = (props)=>{
    const{im , te , li } = props
    return(
        <div className="  bg-white justify-around  rounded-[1rem] mr-8 ">
            <div className="  flex flex-col  items-center w-[35rem] h-[25rem] align-middle pt-20">
            <img src = {im} />
            <h1 className="text-black font-semibold text-2xl pt-5">{te}</h1>
            <a href={li} className="text-black text-lg pt-2 border-b-2 border-black" >More</a>
            </div>
        </div>
    )

}
export default Pro_ca;