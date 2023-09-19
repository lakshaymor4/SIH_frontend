import React from "react";

const Ca = (props)=>{
    const {name , word} = props
    return(
        <div className="text-center bg-white mr-16 pl-10 pt-10 pb-10 pr-10 rounded-[2.5rem]">
            <h1 className="text-7xl font-bold">{name}</h1>
            <h2 className="text-xl text-[#999999] mt-5 font-semibold">{word}</h2>
        </div>


    )
}

export default Ca