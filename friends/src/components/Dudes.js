import React from 'react'

export const Dudes = (props) => {
    return (
        <div>
            <h1>{props.dudes.name}</h1>
            <h1>{props.dudes.age}</h1>
            <h1>{props.dudes.email}</h1>
        </div>
    )
}
