
import React, { useRef, useState } from "react";

const Cancelledservices = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const [msg, setMsg] = useState(null);

    const tableStyle = {
        marginLeft: '100px',
        width: '70%',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        background: '#f0f0f0',
    };

    const tdStyle = {
        padding: '10px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
        fontSize: '14px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: 'lightseagreen',
    };

    const msgPrint = () => {
        setMsg("Service Cancellation Successfully Completed");
    };

    return (
        <>
            <h3 style={{ marginLeft: '500px',marginBottom: '50px',marginTop: '30px', color: 'rgb(246, 249, 249)' }}>Cancelled Services</h3>
            <form>
                <table style={tableStyle}>
                    <tbody>
                        
                        <tr>
                            <td style={{ ...tdStyle, color: 'lightseagreen' }}>Service No:</td>
                            <td style={tdStyle}><input type="text" ref={ref3} style={inputStyle} /></td>
                            <td style={{ ...tdStyle, color: 'lightseagreen' }}>Journey Date:</td>
                            <td style={tdStyle}><input type="date" ref={ref4} style={inputStyle} /></td>
                            </tr>
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center', padding: '10px' }}>
                                <button type="button" onClick={msgPrint} style={buttonStyle}>Search</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <h3 style={{ marginLeft: '100px', color: 'lightseagreen' }}>{msg}</h3>
        </>
    );
}

export default Cancelledservices;
