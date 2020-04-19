import React from 'react'


function People({person}) {
    return (
        <div>
            <h2>Hi, I am {person.Name} staying at {person.Place}</h2>
        </div>
    )
}

export default People
