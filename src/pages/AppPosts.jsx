import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AppPosts = () => {
  const navigate = useNavigate();
    const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts?page=1&&limit=21";
  const [datiPost, setDatiPost] = useState([])
useEffect(() => {
  axios.get(apiUrl).then((resp) => {
    setDatiPost(resp.data)
  })
}, [])
return (
    <>
<h1 className='text-center my-4 summery-title bg-image'>I nostri posts</h1>
<div className="container">
    <div className="row">
   {datiPost.map((curPost, index) => (
  <div className="card my-3 col-3 p-3 m-2 ms-auto" key={index}>
     {datiPost && <a onClick={() => navigate(`/post/${curPost.id}`)} className="mb-2 btn btn-primary">Dettagli post</a>}
  <div className="card-body">
    <h3 className="card-title">{curPost.title}</h3>
    <h6 className="card-subtitle mb-2 text-body-secondary">{curPost.author}</h6>
    <p className="card-text">{curPost.body}</p>
  </div>
 </div>
   )) }
</div></div></>
)
}
export default AppPosts