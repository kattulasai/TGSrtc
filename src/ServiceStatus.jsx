import React from "react";
import { Link, Outlet } from "react-router-dom";

const ServiceStatus = () => {
    return (
        <>
            
            <div style={{ marginLeft: 100 }}>
                <Link to="enq/service/tno" style={{ color: "rgb(246, 249, 249)", textDecoration: "none" }}> 
                    <input type="radio" name="enquiry" defaultChecked /> By Ticket Number
                </Link>
                <Link to="enq/service/sno" style={{ color: "rgb(246, 249, 249)", textDecoration: "none", marginLeft: 20 }} >
                    <input type="radio" name="enquiry" /> By Service Number
                </Link>
                
            </div>
            
            <br /><br />

            <Outlet />
        </>
    );
}

export default ServiceStatus;
