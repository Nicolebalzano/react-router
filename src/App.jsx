import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppHome from './pages/AppHome';
import AppPosts from './pages/AppPosts';
import AppAboutUs from './pages/AppAboutUs';
import GuestLayout from './layouts/GuestLayout';

function App() {
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
