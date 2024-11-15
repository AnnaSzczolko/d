import React from 'react'
import { useState } from 'react'

export default function Player({ name, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(name)
	const [isEditing, setIsEditing] = useState(false)

	function handleEditing() {
		setIsEditing(prevValue => !prevValue)

		if (isEditing) {
			onChangeName(symbol, playerName)
		}
	}

	function handleChange(e) {
		setPlayerName(e.target.value)
	}

	return (
		<li className={isActive ? 'player--active' : undefined}>
			<span className="player">
				{isEditing ? 
				( <input className='player__input' type="text" minLength={2} onChange={handleChange} required value={playerName} />	) 
				: (<span className="player__name">{playerName}</span>)}
				<span className="player__symbol">{symbol}</span>
			</span>
			<button onClick={handleEditing} className="player__btn">
				{isEditing ? 'Save' : 'Edit'}
			</button>
		</li>
	)
}
