import React from "react";
import Home from "./Home";
import './Body.css';
import Searchtickets from "./Searchtickets";
import Searchwithserviceno from "./Searchwithserviceno";
import { Routes,Route,Link,Navigate } from "react-router-dom";
import Bus from "./Bus";
import Track from "./Track";
import Canceltickets from "./Canceltickets";
import Aboutus from "./Aboutus";
import Enquiry from "./Enquiry";
import Ticketenq from "./Ticketenq";
import TransactionStatus from "./TransactionStatus";
import Obno from "./Obno";
import Mno from "./Mno";
import Eid from "./Eid";
import ServiceStatus from "./ServiceStatus";
import Tno from "./Tno";
import Sno from "./Sno";
import CancelTicket from "./CancelTicket";
import Cancelledservices from "./cancelledservices";
import Tourism from "./Tourism";
import Driverinfo from "./Driverinfo";
const Body=()=>{

return(
    <>
    
    <div className="c3">
        <hr></hr>
    <Link to="/home" style={{marginRight:50,marginLeft:200,color:"White",textDecoration:"none"} }>Home</Link>
    <Link to="/bus" style={{marginRight:50,color:"White",textDecoration:"none"}}>Bus On Contract</Link>
    <Link to="/enq" style={{marginRight:50,color:"White",textDecoration:"none"}}>Enquiry</Link>
    <Link to="/cancelt" style={{marginRight:50,color:"White",textDecoration:"none"}}>Cancel Ticket</Link>
    <Link to="/cancels" style={{marginRight:50,color:"White",textDecoration:"none"}}>Cancelled Service</Link>
    <Link to="/tour" style={{marginRight:50,color:"White",textDecoration:"none"}}>Tourism</Link>
    <Link to="/driver" style={{marginRight:50,color:"White",textDecoration:"none"}}>Driver Info</Link>
    <Link to="/aboutus" style={{marginRight:50,color:"White",textDecoration:"none"}}>AboutUs</Link>
    
    <br></br>
    <hr></hr>
    </div>
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}>
        <Route index element={<Searchtickets></Searchtickets>}></Route>
        <Route path="home/search-tickets" element={<Searchtickets />}></Route>
        <Route path="home/search-service-number" element={<Searchwithserviceno />}></Route>
        </Route>
        
        <Route path="/bus" element={<Bus />}>
        <Route index element={<Track></Track>}></Route>
        <Route path="bus/tract" element={<Track />}></Route>
        <Route path="bus/cancel" element={<Canceltickets />}></Route>
        </Route>
        <Route path="/enq" element={<Enquiry />}>
        <Route index element={<Ticketenq></Ticketenq>}></Route>
        <Route path="enq/ticket" element={<Ticketenq />}></Route>
        <Route path="enq/trans" element={<TransactionStatus />}>
        <Route index element={<Obno></Obno>}></Route>
        <Route path="enq/trans/ob" element={<Obno />}></Route>
        <Route path="enq/trans/mno" element={<Mno />}></Route>
        <Route path="enq/trans/eid" element={<Eid />}></Route>
        </Route>
        <Route path="enq/service" element={<ServiceStatus />}>
        <Route index element={<Tno></Tno>}></Route>
        <Route path="enq/service/tno" element={<Tno />}></Route>
        <Route path="enq/service/sno" element={<Sno />}></Route>
        </Route>
        </Route>
        <Route path="/cancelt" element={<CancelTicket />}></Route>
        <Route path="/cancels" element={<Cancelledservices />}></Route>
        <Route path="/tour" element={<Tourism />}></Route>
        <Route path="/driver" element={<Driverinfo />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
    </Routes>
    
    </>
)
}
export default Body;