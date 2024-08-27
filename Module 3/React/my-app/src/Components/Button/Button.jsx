import React from 'react'

function Button({title, bgColor}) {

    // console.log(props)


  return (
    <>
    
    <button style={{backgroundColor:`${bgColor || 'black'}`}}>{title}</button><br />
    

    </>
  )
}

export default Button