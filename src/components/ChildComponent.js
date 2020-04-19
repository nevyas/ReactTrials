import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.grrethandler  ('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
