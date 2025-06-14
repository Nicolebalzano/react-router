import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppHome from './pages/AppHome';
import AppPosts from './pages/AppPosts';
import AppAboutUs from './pages/AppAboutUs';
import GuestLayout from './layouts/GuestLayout';
import PostDetails from './components/PostDetails';
import AddPost from './pages/AddPost';

function App() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route element={<GuestLayout />}>
      <Route path="/" element={<AppHome />} />
      <Route path="/post" element={<AppPosts />} />
      <Route path="/:id" element={<PostDetails />} />
      <Route path="about" element={<AppAboutUs />} />
      <Route path="create" element={<AddPost />} />
    </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
