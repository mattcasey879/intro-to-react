import React from 'react'

const Main = (props) => {

    console.log(props)
    return (
        <main>
        <h1>{props.name}</h1>
        <p>{props.location}</p>
        </main>
    )
}

export default Main