import React from 'react'

function Column(props) {
    const { id, color } = props;
    const colStyles = {
        backgroundColor: color,
        fontWeight: "400",
        fontSize: "20px"
    }
    return (
        <div style={colStyles}>
            {id}
        </div>
    )
}

export default Column;