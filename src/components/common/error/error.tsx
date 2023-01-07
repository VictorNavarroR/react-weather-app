import React from 'react'
import { IError } from '../../.../../../models/error.interface'
import './error.scss'

function Error({error}: IError) {
  return (
    <div className="error">
        <h2>{error}</h2>
        <img src="weather-images/no-results.png" alt="not found" />
    </div>
  )
}

export default Error