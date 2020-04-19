import React from 'react'

function KeyArray() {
    const Name = ['Bruce',' Clark', 'Diana','Bruce']
const Namelist = Name.map((name,index)=> <h2 key={index}>{name} {index}</h2> )
    return (
        <div>
            {Namelist}
        </div>
    )
}

export default KeyArray
