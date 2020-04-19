import React from 'react'
import './Styles.css'

function Styling(props) {
    let ClassName = props.primary ? 'primar': ''
    return (
        <div>
            <h1 className={`${ClassName} fontxl`}>Styling to Orange</h1>
        </div>
    )
}

export default Styling
