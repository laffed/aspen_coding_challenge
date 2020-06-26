import React from 'react'

function Column(props) {

    const { id, color } = props;

    return (
        <div style={{ backgroundColor: color }}>
            {id}
        </div>
    )
}

export default Column;