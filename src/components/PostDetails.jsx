import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import AppHome from "../pages/AppHome";

const PostDetails = () => {
const {id} = useParams();
const [post, setPost] = useState({});
const navigate = useNavigate();
useEffect(() => {
    axios
      .get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
      .then((resp) => setPost(resp.data));
  }, [id]);

  return (
    <div className="container my-4 ">
        {post &&  <><a onClick={() => navigate(-1)} className="mb-2 btn btn-primary">
            Ritorna alla pagina precedente
          </a><a onClick={() => navigate("/")} className="mb-2 btn btn-success mx-2">
      Home
          </a></>}
        <h1 className="m-4">Il tuo nuovo post</h1>
        <div className="card m-2 p-3 col-4 row py-4">
      <h2> {post.title}</h2>
      <p><strong>Autore:</strong> {post.author}</p>
      <p> {post.body}</p>
      </div>
    </div>
  )
}

export default PostDetails