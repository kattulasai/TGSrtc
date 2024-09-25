import React from "react";
const Aboutus=()=>{
    return(
        <>
        <div style={{border:"none", marginLeft:200, marginRight:200, marginTop:30,marginBottom:30}}> 
        <p></p>
        <h2 style={{color:"rgb(246, 249, 249)"}}>About Us</h2>
        <p><b>TSRTC</b> is committed to provide consistently high quality of services and to 
        continuously improve the services through a process of teamwork for the utmost satisfaction of 
        the passengers and to attain a position of pre-eminence in the Bus Transport sector.</p>
        <h3>TYPES OF SERVICES:</h3>
        <p>Advance reservation facility is provided through Online Passenger Reservation System (OPRS)
             for the different types of services mentioned hereunder:</p>
             <table border={1}>
                <tr>
                    <th>Sno</th>
                    <th>Type of bus</th>
                    <th>Number of services</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Garuda Plus (AC Semi-Sleeper Multi Axle)</td>
                    <td>101</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Rajdhani (2 + 2 AC Semi-Sleeper)</td>
                    <td>290</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Super Luxury (2 + 2 Non-AC Pushback)</td>
                    <td>171</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Deluxe (2 + 2 Non-AC)</td>
                    <td>189</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Express (3 + 2 Non-AC)</td>
                    <td>671</td>
                </tr>
                
             </table>
             <p>Advance reservation facility is provided 
                for 1,485 services of different types mentioned above. A total of 57,001 
                seats are offered daily for advance/current reservation.</p>
            <h3>CONNECTIVITY:</h3>
            <p>Services are operated connecting major cities and towns in :</p>
            <li>
            Andhra Pradesh (Visakhapatnam, Vijayawada, Kakinada, Rajahmundry, Guntur, Eluru, Ongole, Nellore, Chittoor, Tirupathi, Anantapur, Kadapa, Kurnool etc.)

            </li>
            <li>elangana (Hyderabad, Sangareddy, Mahabubnagar, Nalgonda, Miryalaguda, Warangal, Karimnagar, Nizamabad, Bodhan, Adilabad, Nirmal, Khammam, Bhadrachalam etc.) and
            </li>
            <li>Surrounding States (Mumbai, Pune, Shirdi, Nagpur, Bengaluru, Chennai etc.)
            </li>
            </div>
        </>
    )
}
export default Aboutus;