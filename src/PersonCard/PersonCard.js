import React from 'react'

function PersonCard(props) {
    return (
        <div>
            <p onClick = {props.click} >Name: {props.pName} </p>
            <p>Age:{props.pAge} </p>
        </div>
    )
}

export default PersonCard;
