import React from 'react';

const Scroll = (props) => {
    return (
        <div
            style={{overflow: 'auto', 
                    border: '3px solid black', 
                    height: '80vh'}}>
                {props.children}
        </div>
    )
}

export default Scroll;