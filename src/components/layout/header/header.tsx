import React from 'react'
import './header.scss'

function header() {
  return (
    <header>
        <div className="logo">
            <img className="logo__img" src="/logoApp.png" alt="Logo" />
            <h1>Weather<span>APP</span></h1>
        </div>
    </header>
  )
}

export default header