import React from 'react'

const box = ({title, height, border = "1px solid black" , width = "100%", color}) => {
  return (
    <div style={{height, border, width, color }}>
        {title}
    </div>
  )
}

export default box
