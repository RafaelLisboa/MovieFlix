import React from 'react'
import './styles/RowWrapper.css'

const RowWrapper = (props) => {
    return (
        <div className="row-wrapper">
            {props.children}
        </div>
    )
}

export default RowWrapper;