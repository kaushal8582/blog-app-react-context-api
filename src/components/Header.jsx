import React from 'react'
import "../App.css"

const Header = (props) => {
  return (
    <div className='header' >
        <h1>Blog Website</h1>
        <button onClick={()=>props.onOpen()} >Add New Blog</button>
    </div>
  )
}

export default Header