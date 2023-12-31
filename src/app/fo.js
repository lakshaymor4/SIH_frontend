import React from "react";
import Fo from "./fo_co";
import grp from "../assets/images/grp.jpg"
import key from "../assets/images/key.jpg"
import lab2 from "../assets/images/lab2.jpg"
import f_doc from "../assets/images/f_doc.jpg"

const Four = ()=>{
    return(
        <div className="mt-32 mb-20">
        <div className="flex flex-row justify-around">
            <Fo img = {lab2} but = "ENTER SYMPTOMS" li="symp" />
            <Fo img = {key} but = "BOOK APPOINTMENT" li="appoin"/>
        </div>
         <div className="flex flex-row justify-around mt-20 ">
            <Fo img = {grp} but = "CALL AMBULANCE"li="amb" />
            <Fo img = {f_doc} but = "DOCTORS LIST" className="d22" li="doc"/>
        </div>
        </div>
    )
}
export default Four