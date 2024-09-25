import React, { useRef, useState } from "react";

const CancelTickets = () => {
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
        backgroundColor: 'lightseagreen',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const msgPrint = () => {
        setMsg("Ticket Cancellation Successfully Completed");
    };

    return (
        <>
            <h3 style={{ marginLeft: '100px', color: 'rgb(246, 249, 249)' }}>Cancel Ticket</h3>
            <form>
                <table style={tableStyle}>
                    <tbody>
                        <tr style={{ color: 'lightseagreen' }}>
                            <td colSpan="6">
                                <input type="radio" ref={ref1} name="cancellation" /> Full Cancellation
                                <input type="radio" ref={ref2} name="cancellation" style={{ marginLeft: "20px" }} /> Partial Cancellation
                            </td>
                        </tr>
                        <tr>
                            <td style={{ ...tdStyle, color: 'lightseagreen' }}>Ticket No:</td>
                            <td style={tdStyle}><input type="text" ref={ref3} style={inputStyle} /></td>
                            <td style={{ ...tdStyle, color: 'lightseagreen' }}>UID No:</td>
                            <td style={tdStyle}><input type="text" ref={ref4} style={inputStyle} /></td>
                            <td style={{ ...tdStyle, color: 'lightseagreen' }}>Mobile No:</td>
                            <td style={tdStyle}><input type="text" ref={ref5} style={inputStyle} /></td>
                        </tr>
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center', padding: '10px' }}>
                                <button type="button" onClick={msgPrint} style={buttonStyle}>Search</button>
                                <button type="reset" style={{ ...buttonStyle, marginLeft: '10px' }}>Reset</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <h3 style={{ marginLeft: '100px', color: 'lightseagreen' }}>{msg}</h3>
        </>
    );
}

export default CancelTickets;
