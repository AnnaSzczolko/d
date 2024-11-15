import React, { useState } from 'react'
import Player from './Player'
import Gameboard from './Gameboard'
import Turn from './Turn'
import { WINNING_COMBINATIONS } from './winningCombinations'
import End from './End'

const PLAYERS = {
	X: 'Player 1 ',
	O: 'Player 2 ',
}

const INITIAL_GAMEBOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
]

function passActivePlayer(gameTurns) {
	let currentPlayer = 'X'
	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O'
	}

	return currentPlayer
}

function deriveGameboard(gameTurns) {
	let gameboard = structuredClone(INITIAL_GAMEBOARD)

	for (const turn of gameTurns) {
		const { square, player } = turn
		const { row, col } = square

		gameboard[row][col] = player
	}

	return gameboard
}

function handleWinner(gameboard, playersName) {
	let winner = null

	for (const combination of WINNING_COMBINATIONS) {
		const firstSymbol = gameboard[combination[0].row][combination[0].col]
		const secondSymbol = gameboard[combination[1].row][combination[1].col]
		const thirdSymbol = gameboard[combination[2].row][combination[2].col]

		if (firstSymbol && firstSymbol === secondSymbol && secondSymbol === thirdSymbol) {
			winner = playersName[firstSymbol]
		}
	}
	return winner
}

export default function App() {
	const [gameTurns, setGameTurns] = useState([])
	const [playersName, setPlayerNames] = useState(PLAYERS)

	const activePlayer = passActivePlayer(gameTurns)
	const gameboard = deriveGameboard(gameTurns)
	const winner = handleWinner(gameboard, playersName)
	const draw = gameTurns.length === 9 && !winner

	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns(prevTurns => {
			const currentPlayer = passActivePlayer(prevTurns)
			const updatedTurns = [
				{
					square: {
						row: rowIndex,
						col: colIndex,
					},
					player: currentPlayer,
				},
				...prevTurns,
			]
			return updatedTurns
		})
	}

	function handleResetGameboard() {
		setGameTurns([])
	}

	function handleChangePlayerName(symbol, playerName) {
		setPlayerNames(prevNames => {
			return { ...prevNames, [symbol]: playerName }
		})
	}

	return (
		<main>
			<div id="game-space">
				<ul id="players">
					<Player
						name={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === 'X'}
						onChangeName={handleChangePlayerName}></Player>
					<Player
						name={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === 'O'}
						onChangeName={handleChangePlayerName}></Player>
				</ul>

				{(winner || draw) && <End winnerSymbol={winner} resetGameboard={handleResetGameboard}></End>}
				<Gameboard
					board={gameboard}
					onSelectSquare={handleSelectSquare}
					activePlayerSymbol={activePlayer}
					turns={gameTurns}></Gameboard>
			</div>
			<Turn turns={gameTurns}></Turn>
		</main>
	)
}
