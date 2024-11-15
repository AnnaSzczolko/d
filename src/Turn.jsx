import React from 'react'

export default function Turn({turns}) {

	return <ol id="log">
{turns.map( (item)=> {
    return <li key={`${item.square.row} ${item.square.col}`}>
       Player {item.player} selected {item.square.row}, {item.square.col} position.
    </li>
})}
    </ol>
}
