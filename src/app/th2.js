import React from "react";
import Ffr from "./ima";
import vi from "../assets/images/virus.avif"
import arrow from "../assets/images/arrow.png"
import doc from "../assets/images/doc.jpg"
import doc2 from "../assets/images/doc2.jpg"
import appoi from "../assets/images/appoi.jpg"

const Thi = () => {
    return (
        <>
            <div className="bg-[#9BAAF9] pt-72 text-white text-center">
                <p className="text-xl font-semibold">Working process</p>
                <h1 className="text-5xl font-semibold">How it works</h1>
            </div>

            <div className="bg-[#9BAAF9]  text-white text-center">
                <div className="flex flex-row justify-around text-center  ">
                    <Ffr sr={vi} h="Enter your System" p1="Fill out the form and give details on the" p2=" system experienced" />
                    {/* <img src = {arrow} className="rotate-90 " /> */}
                    <Ffr sr={doc} h="Diagnosis" p1="Gives you a range of diseases you migh've " p2="  concurred based on symptoms provided" />
                </div>
                <div className="absolute right-[10rem]">
                    {/* <img src = {arrow} className="rotate-180   "/> */}

                </div>
                <div></div>

                <div className="flex flex-row justify-around mt-48 ">

                    <Ffr sr={doc2} h="Call an Ambulance" p1="Will immediately call for an ambulance at" p2=" the stipulated location" />
                    {/* <img src = {arrow} className="rotate-[270deg]  "/> */}
                    <Ffr sr={appoi} h="Book an appointment" p1="Book an appointment in leading hospitals" p2="with the best facilities" className="d11" />


                </div>

            </div>
        </>

    )
}
export default Thi