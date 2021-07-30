import React, { useState } from 'react';

const DisplayLists = (props) => {
    const [getLine, setLine] = useState(false)

    const CheckItem = () => {
        setLine(getLine ? false : true)
    }
    
    return (<>
        <li className="w3-display-container w3-padding w3-center" style={{textDecoration: getLine ? "line-through": "none"}}>
            
            {props.text}
            <span className="w3-button w3-display-right w3-hover-red"
                onClick={() => { props.onSelectForDelete(props.id) }}>&#10006;</span>
            <span className="w3-button w3-display-left w3-hover-green"
                onClick={CheckItem}>&#10004;</span>
        </li>
    </>)
}

export default DisplayLists;