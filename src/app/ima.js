import React from "react";

const Ffr = (props)=>{
    const{sr , h, p1,p2} = props;
    return(
        <div>
                    <img src={sr} className="w-[11.313rem] rounded-[2.5rem] ml-12" />
                    <h1 className="font-bold text-2xl mt-4">{h}</h1>
                    <p className="text-base mt-4">{p1}<br />{p2}</p>
                    
                </div>

    )
}
export default Ffr