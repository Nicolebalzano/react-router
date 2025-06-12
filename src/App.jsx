import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts ";
  const [datiPost, setDatiPost] = useState([])
useEffect(() => {
  axios.get(apiUrl).then((resp) => {
    {setDatiPost(resp.data)}
  })
}, [])
  return (
    <>
    
    </>
  )
}

export default App
