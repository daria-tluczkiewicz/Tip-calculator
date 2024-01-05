import React from 'react'


export default function Result({ header, result }) {

  const headerClass = header.replace(' ', '-').toLowerCase()
  return (
    <div className={headerClass}>
      <div className='header'>
        <h2>{header}</h2>
        <p>/person</p>
      </div>
      <div className="result">${result}</div>
    </div>
  )
}
