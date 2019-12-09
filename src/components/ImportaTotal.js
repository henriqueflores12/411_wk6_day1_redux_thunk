import React from 'react'

const ImportTotal = (props) => {
    return (
        <div style={{ textAlign: 'left' }}>
            <h4>Total:</h4>
            {/* change 4 to props.cars.length */}
            <h3>{props.makes.length}</h3>
        </div>
    )
}

export default ImportTotal