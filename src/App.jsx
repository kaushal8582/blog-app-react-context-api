
import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ShowImg from './components/ShowImg'

import ReactDom from "react-dom"

function App() {

  const [open,setOpen] = useState(false)

  function handleCloseClick(){
    setOpen(false)
  }

  function handleOpenClick(){
    setOpen(true)
  }

  return (
    <>
      <Header onOpen={handleOpenClick} />
      <ShowImg/>
      {open && ReactDom.createPortal(<Form onClose = {handleCloseClick} />,document.getElementById("root"))}
    </>
  )
}

export default App
