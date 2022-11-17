import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const navigate = useNavigate();
  const params =useParams();
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      availability: "",
    },

    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://6374714408104a9c5f8031bc.mockapi.io/Books/${params.id}`,
          values
        );
        alert("Success");
        formik.resetForm();
        navigate("/portal/books");
      } catch (error) {
        alert("Error");
      }
    },
  });

  useEffect(() => {
    let fetchData = async () =>{
      try{
        const user1 = await axios.get(`https://6374714408104a9c5f8031bc.mockapi.io/Books/${params.id}`)
        console.log(user1.data);
        formik.setValues(user1.data)
      }
      catch (error){
        alert("Error")
      }
    }
    fetchData()
    
   
  },[])

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                type={"text"}
                className={`form-control`}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Author</label>
              <input
                name="author"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
                type={"text"}
                className={`form-control`}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Genre</label>
              <input
                name="genre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.genre}
                type={"text"}
                className={`form-control`}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Availability</label>
              <select
                name="availability"
                onChange={formik.handleChange}
                value={formik.values.availability}
                className="form-control"
              >
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
        <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditBook