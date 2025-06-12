import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AppHome from './pages/AppHome';
import AppPosts from './pages/AppPosts';
import AppAboutUs from './pages/AppAboutUs';
import GuestLayout from './layouts/GuestLayout';

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
    <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
      <Route path="/" element={<AppHome/>}>  </Route>
          <Route path="/post" element={<AppPosts/>}></Route>
              <Route path="/about" element={<AppAboutUs/>}></Route>
</Route>
    
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
