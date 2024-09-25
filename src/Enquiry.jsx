import React from "react";
import { Link, Outlet } from "react-router-dom";

const Enquiry = () => {
    return (
        <>
            <h3 style={{ color: 'rgb(246, 249, 249)', marginLeft: 500, marginBottom: 50, marginTop: 50 }}>Ticket Enquiry Status</h3>

            <div style={{ marginLeft: 100 }}>
                <Link to="enq/ticket" style={{ color: "rgb(246, 249, 249)", textDecoration: "none" }}> 
                    <input type="radio" name="enquiry" defaultChecked /> Ticket Enquiry
                </Link>
                <Link to="enq/trans" style={{ color: "rgb(246, 249, 249)", textDecoration: "none", marginLeft: 20 }} >
                    <input type="radio" name="enquiry" /> Transaction Status
                </Link>
                <Link to="enq/service" style={{ color: "rgb(246, 249, 249)", textDecoration: "none", marginLeft: 20 }} >
                    <input type="radio" name="enquiry" /> Service Status
                </Link>
            </div>
            
            <br /><br />

            <Outlet />
        </>
    );
}

export default Enquiry;
