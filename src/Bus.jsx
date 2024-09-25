import React from "react";
import { Link,Outlet } from "react-router-dom";
import './Home.css';
const Bus = () => {
    
    return (
        <>
            <h3 style={{color:'rgb(246, 249, 249)',marginLeft:500,marginBottom:50,marginTop:50}}>Bus On Contract</h3>
            
            <Link to="bus/tract" style={{marginLeft:100,color:"white",textDecoration:"none"}} className="div1">&nbsp;Track Ticket&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to="bus/cancel" style={{color:"white",textDecoration:"none"}} className="div1">Cancel Ticket&nbsp;</Link>
            <br></br>
            <br></br>
            
            <Outlet></Outlet>
        </>
    );
}

export default Bus;
