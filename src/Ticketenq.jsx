import React, { useRef, useState } from "react";

const Ticketenq = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [msg, setMsg] = useState(null);

    const tableStyle = {
        
        marginLeft:'100px',
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
        if (ref1.current.value && ref2.current.value) {
            setMsg("Ticket Enquired Successfully");
        } else {
            setMsg("Please Try Again");
        }
    };

    return (
        <>
            <table style={tableStyle}>
            
                <tbody>
                    <tr>
                        <td style={{tdStyle,color:'lightseagreen'}}>Ticket No:</td>
                        <td style={tdStyle}><input type="text" ref={ref1} style={inputStyle} /></td>
                        <td style={{tdStyle,color:'lightseagreen'}}>Mobile No:</td>
                        <td style={tdStyle}><input type="text" ref={ref2} style={inputStyle} /></td>
                    </tr>
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center' }}>
                            <button onClick={msgPrint} style={buttonStyle}>Submit</button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            <h3 style={{marginLeft:'100px',color:'lightseagreen'}}>{msg}</h3>
            
        </>
    );
};

export default Ticketenq;
