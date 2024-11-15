import React from 'react'

export default function End({winnerSymbol, resetGameboard, winner}) {
  return (
    <div className='gameover'>
        <h2>{winnerSymbol ? 'CONGRATULATIONS' : 'GAME OVER'}</h2>
        { winnerSymbol && <p>{winnerSymbol} won!</p>}
        { !winnerSymbol && <p>It is a draw!</p>}
        <p>
            <button onClick={resetGameboard}> Try again</button>
        </p>
    </div>
  )
}
