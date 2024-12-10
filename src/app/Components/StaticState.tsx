import React from 'react';
import { State } from './Definitions';

const StaticState = ({ id, label, color, accept}: State) => {

    const style = {
        backgroundColor: color,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'white',
    };

    const acceptStyle = {
       ...style,
        width: '40px',
        height: '40px',
        border: '5px solid white'
    };

    const triangle = {
        width: '0',
	    height: '0',
	    borderTop: '10px solid transparent',
	    borderLeft: '10px solid #fff',
	    borderBottom: '10px solid transparent',
        marginRight: "10px", // Spacing between the triangle and the circle
    }


    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div style={(id == '0' ? triangle : undefined)} /><div id={`static-${id}`}
            style={accept ? acceptStyle : style}
        >
            {label}
        </div>
        </div>
    );
};


export default StaticState;