import React from 'react'
import reactdom from 'react-dom'

function Portals() {
    return reactdom.createPortal(
        <div>
           <h1> Poratal Data</h1> 
        </div>,
        document.getElementById('PortalDemo')
    )
}

export default Portals
