import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sass/style.scss'
import App from './App.jsx'
import icon from './icon/tictactoe.svg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className='header'>
      <h1 className='header__title'>TIC TAC TOE GAME</h1>
      <img className='header__icon' src={icon} alt="tic tac toe icon" />
    </header>
    <App />
  </StrictMode>,
)
