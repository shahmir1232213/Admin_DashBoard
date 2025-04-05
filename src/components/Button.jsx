import React from 'react'

const Button = ({color,bgColor,borderRadius,text,height,width,fontSize}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
        height: height,
        width: width,
        fontSize: fontSize,
        textAlign: 'center', // Centers text horizontally (not needed with flexbox)
        display: 'flex', // Enables flexbox
        alignItems: 'center', // Centers content vertically
        justifyContent: 'center', // Centers content horizontally
      }}
    >
      {text}
    </button>
  )
}

export default Button