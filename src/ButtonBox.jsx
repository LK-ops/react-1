import React from 'react'
import Button from './Button'

const ButtonBox = () => {
  return (
    <div style={{height:'80vh',display: 'flex',flexDirection: 'column',alignItems: 'center',gap: '10px'}}>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </div>
  )
}

export default ButtonBox