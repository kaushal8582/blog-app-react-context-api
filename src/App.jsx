
import { useContext, useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ShowImg from './components/ShowImg'

import ReactDom from "react-dom"
import blogContext from './store/blog-context'

function App() {

  const {isEdit} = useContext(blogContext)

  const [open,setOpen] = useState(false)

  function handleCloseClick(){
    setOpen(false)
  }

  function handleOpenClick(){
    setOpen(true)
  }

  useEffect(()=>{
    if(isEdit){
      setOpen(true)
    }
  },[isEdit])


  return (
    <>
      <Header onOpen={handleOpenClick} />
      <ShowImg/>
      {open && ReactDom.createPortal(<Form onClose = {handleCloseClick} />,document.getElementById("root"))}
    </>
  )
}

export default App
