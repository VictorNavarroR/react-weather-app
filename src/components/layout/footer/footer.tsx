import React from 'react'
import './footer.scss'

function footer() {
    const year: number = new Date().getFullYear();
  return (
    <footer>
       <small>The WeatherApp | {year}</small>
    </footer>
  )
}

export default footer