import React, { useRef, useState } from "react";



const Searchwithserviceno = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [msg, setMsg] = useState(null);

    const name1={
        color:'rgb(246, 249, 249)',
        marginleft:'50px',
    }
    const tableStyle = {
        width: '50%',
        margin: 'auto',
        borderCollapse: 'collapse',
        textAlign: 'left',
    };

    const inputStyle = {
        width: '50%',
        padding: '10px',
        margin: '5px 0',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        backgroundColor: 'lightseagreen', 
        color: 'white',
        padding: '10px 20px',
        margin: '10px 0',
        border: 'none',
        cursor: 'pointer',
        width: '50%',
    };


    const msgPrint = () => {
        if (ref1.current.value && ref2.current.value) {
            setMsg("Ticket booking Successfully");
        } else {
            setMsg("Please Try Again");
        }
    };

    return (
        <>
            
            <table style={tableStyle}>
            <h3 style={name1}>Search for Bus Tickets</h3>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder="Enter Service code" ref={ref1} style={inputStyle}  /></td>
                    </tr>
                    <tr>
                        <td><input type="date" placeholder="Depart on" ref={ref2} style={inputStyle}  /></td>
                    </tr>
                    <tr>
                        <td><button onClick={msgPrint} style={buttonStyle}>Check Availability</button></td>
                    </tr>
                </tbody>
            </table>
            <h3 style={name1}>{msg}</h3>
        </>
    );
}

export default Searchwithserviceno;