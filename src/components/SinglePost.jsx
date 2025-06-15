import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
      .then(resp => setPost(resp.data));
  }, [id]);

  return post ? (
    <div className="container my-4">
      <h1>{post.title}</h1>
      <h6>{post.author}</h6>
      <p>{post.body}</p>
      <a onClick={() => navigate('/post')} className="mb-2 btn btn-secondary">Torna ai post</a>
   </div>
  ) : (
    <p className='container my-4 fs-3'>Caricamento...</p> 
  );
};

export default SinglePost;
