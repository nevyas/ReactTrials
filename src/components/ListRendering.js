import React from 'react'
import People from './People'

function ListRendering() {
    const Persons = [
        {
            id: 0,
            Name: 'Neha',
            Place: 'Ahmedabd'
        },
        {
            id: 0,
            Name: 'Pari',
            Place: 'Delhi'
        }
    ]

    const PersonList = Persons.map(person => <People person={person} />)
    //   const PersonList = Persons.map(person => <h2> iam {person.Name}</h2>)

    return (
        <div>
            {
                PersonList
            }



        </div>
    )
}

export default ListRendering
