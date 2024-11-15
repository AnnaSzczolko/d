import React from 'react'

export default function Gameboard({ onSelectSquare, board }) {
	return (
		<ol className="gameboard">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol className="gameboard__row">
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol !== null}
									className="gameboard__btn">
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}
