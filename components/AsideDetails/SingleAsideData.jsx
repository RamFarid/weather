import React from 'react'

function SingleAsideData({ condition, txt }) {
  return (
    <div className='data'>
      <div className='data-type'>{txt || 'Status condition'}</div>
      <div className='data-details status'>{condition}</div>
    </div>
  )
}

export default SingleAsideData
