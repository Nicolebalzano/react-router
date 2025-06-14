import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormData from "../components/FormData";


const AddPost = () => {
    const initalFormData = {
        title : "",
        author : "",
        body : "",
    }
    const [formData, setFormData] = useState(initalFormData)
    const navigate = useNavigate();

     const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]:value });
  };
    const sendData = (event) => {
        event.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
         
                navigate(`/${resp.data.id}`);
        })
    }
return (
      <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-3">Crea un nuovo post</h3>

        
<FormData  formData={formData}
                  handleChange={handleChange}
                  onFormSubmit={sendData}/>
              </div>
            </div>
          </div>
        </div>
         {formData && <a className="my-4 btn btn-success" onClick={() => navigate("/post")}>Dai uno sguardo ai nostri post</a>}
      </div>
      
    </>
)
}
export default AddPost;