import React from "react";
import axios from "axios";
import { useState } from "react";
import "../style.css"
const Sear = ()=>{
    const [val , setVal] = useState("")
    const hand= (e)=>{
        setVal(e.target.value)
    }
    const handle = (e)=>{
        e.preventDefault();
        const con = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        area: val
      
      },
    };
    axios(con)
      .then((resu) => console.log(resu.data.tok))
      .catch((reu) => console.log(reu));
  };
        
    
    return(
        <>
        <div>
        <div className="input-group input1">
            <input type="search" className="form-control rounded" placeholder="Enter Area" aria-label="Search"
                aria-describedby="search-addon" name="name" onChange={hand} />
            <button type="button" className="btn btn-outline-primary" onClick={handle}>search</button>
        </div>
        <div className="text1">
            <strong>
                <p className="text_content">Have access to medical help any time</p>
            </strong>
        </div>
        <div>
            <img className="img1" src="https://assets.nicepagecdn.com/8e7e2bc1/5895811/images/5900571-0.png" />
        </div>
    </div>
    </>
    )
}
export default Sear