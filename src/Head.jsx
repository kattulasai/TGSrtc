import React, { useState } from "react";
import './Head.css';
const Head=()=>{
    
    return(
        <>
        
        <div>
            <div className="header">
                <div>
                <img src="/img2.jpg.png" alt="i1" className="img1"></img>
                </div>
            
                <div  className="img23">
                <div>
                    <img src="/img2.png" alt="i2"></img>&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src="/img3.png" alt="i3"></img>
                </div>
               
                <div>
                <img src="/img4.png" alt="i4"></img>
                </div>
                </div>
                <div  className="img23">
                <div>
                    <button type="submit" className="buttonStyle">eTicket Login</button>&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="buttonStyle">ATP/OPB Login</button>
                </div>
                <div className="con">
                (24/7 Customer Support)<br></br>
040 69440000 / 040 23450033<br></br>
online.support@tsrtcbus.in
                </div>
                </div>
                </div>
            </div>
        <hr></hr>
        </>
    )
}
export default Head;