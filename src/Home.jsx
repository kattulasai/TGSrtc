import React from "react";
import {Link,Outlet} from "react-router-dom";
import './Home.css';
const Home=()=>{
    return(
        <>
        
         <Link to="home/search-tickets" style={{marginLeft:400,color:"white",textDecoration:"none"}} className="div1">Search for Bus Tickets&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Link>
         <Link to="home/search-service-number" style={{color:"white",textDecoration:"none"}} className="div1">Search with Service Number</Link>

         <Outlet></Outlet>
        
        </>
    )
}
export default Home;