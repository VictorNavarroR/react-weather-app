import React from 'react'
import './loading.scss'

function loading() {
  return (
    <>
    <div className="loading__wrapper">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
    </>
  )
}

export default loading