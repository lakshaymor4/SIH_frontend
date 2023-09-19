import React from "react";
const Fo=  (props)=>{
const{img , but } = props
    return(
        <div>
            <img src = {img} className="h-[13.5rem] w-[16.313rem] rounded-[2.5rem]" /> 
            <button type="submit" className="mt-8 text-white bg-[#9BAAF9] pt-[1.063rem] pb-[1.063rem] pl-[3.375rem] pr-[3.375rem] rounded-[2rem] font-semibold hover:bg-indigo-500">{but}</button>
        </div>

    )
}
export default Fo