import React from "react";

const Inp = (props)=>{
    const{name , w } = props;
    return  (
        <div className="flex flex-col" >
        <label for = {name}>{name}</label>
        <input name = {name} placeholder={"Enter "+name} id={w}/>
        </div>
    )

}
export default Inp