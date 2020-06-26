import React from 'react'

function Column(props) {
    const { id, style, color } = props;


    return (
        <div style={{ ...style, backgroundColor: color }}>
            {id}
        </div>
    )
}

export default Column;