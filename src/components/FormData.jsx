const FormData = ({formData, handleChange, onFormSubmit}) => {
return (
    <form onSubmit={onFormSubmit}>
    <div className="mb-2">
        <label htmlFor="" className="form-label">
            Titolo
        </label>
        <input
          type="text"
          className="form-control"
          value={formData.title}
          name="title"
          onChange={handleChange}
        />
    </div>
      <div className="mb-2">
        <label htmlFor="" className="form-label">
            Nome autore
        </label>
        <input
          type="text"
          className="form-control"
          value={formData.author}
          name="author"
          onChange={handleChange}
        />
    </div>
    <div className="mb-2">
        <label htmlFor="description" className="form-label">
         Corpo dell'articolo
        </label>
        <textarea
          className="form-control"
          name="body"
          value={formData.body}
          onChange={handleChange}
          id="body"
        ></textarea>
      </div>
       <button type="submit" className="btn btn-primary">
        Salva
      </button>
</form>
)
}
export default FormData