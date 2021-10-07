import React from "react";
import q1 from './images/q1.jpg'


export function ImageComponent(props) {
    return (<div>
        <div style={{ width: props.width, height: props.height, backgroundColor: 'red', border: '1px solid black' }}>
            <img src={q1} style={{ width: '100%', height: '100%' }} />

        </div>
    </div>)


}