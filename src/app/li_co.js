import React from "react";

const Lin = (pr)=>{
const{name , link} = pr
return(
    <a href={link} className="pr-2.5 pl-2.5 pt-2.5 pb-2.5 mr-8 hover:border-solid hover:border-blue-700 hover:border-2 text-center">{name}</a>
)
}
export default Lin 