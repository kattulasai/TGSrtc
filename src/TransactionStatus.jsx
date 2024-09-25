import React from "react";
import { Link, Outlet } from "react-router-dom";

const TransactionStatus = () => {
    return (
        <>
            
            <div style={{ marginLeft: 100 }}>
                <Link to="enq/trans/ob" style={{ color: "rgb(246, 249, 249)", textDecoration: "none" }}> 
                    <input type="radio" name="enquiry" defaultChecked /> By Ob Reference No
                </Link>
                <Link to="enq/trans/mno" style={{ color: "rgb(246, 249, 249)", textDecoration: "none", marginLeft: 20 }} >
                    <input type="radio" name="enquiry" /> By Mobile Number
                </Link>
                <Link to="enq/trans/eid" style={{ color: "rgb(246, 249, 249)", textDecoration: "none", marginLeft: 20 }} >
                    <input type="radio" name="enquiry" /> By Email Id
                </Link>
            </div>
            
            <br /><br />

            <Outlet />
        </>
    );
}

export default TransactionStatus;
