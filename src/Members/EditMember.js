import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditMember() {
  const navigate = useNavigate();
      const params =useParams()
      const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
          phone: "",
          gender: "",
          book_id: "",
          issue_date: "",
          return_date: "",
        },
    
        validate: (values) => {
          let error = {};
    
          if (!values.name) {
            error.name = "Please Enter a valid name";
          }
    
          if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
            error.name = "username must be between 3 to 15 characters";
          }
    
          if (!values.email) {
            error.email = "Please Enter a email";
          }
    
          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            error.email = "Please enter a valid email";
          }
    
          if (!values.password) {
            error.password = "Please Enter a valid password";
          }
    
          if (values.password && values.password.length !== 8) {
            error.password = "pasword must 8 characters";
          }
    
          if (!values.phone) {
            error.phone = "Please Enter your phone number";
          }
    
          if (values.phone.length !== 10) {
            error.phone = "Please Enter a valid PhoneNumber";
          }
    
          return error;
        },
        onSubmit: async (values) => {
          try {
            const user1 = await axios.put(
              `https://6374714408104a9c5f8031bc.mockapi.io/Member/${params.id}`,
              values
            );
            alert("Success");
            formik.resetForm();
            navigate("/portal/members");
          } catch (error) {
            alert("Error");
          }
        },
      });

      useEffect(() => {
        let fetchData = async () =>{
          try{
            const user1 = await axios.get(`https://6374714408104a9c5f8031bc.mockapi.io/Member/${params.id}`)
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
                  <label>Name</label>
                  <input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.name && formik.errors.name ? "error-box" : ""
                    }
                        ${
                          formik.touched.name && !formik.errors.name
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.email && formik.errors.email ? "error-box" : ""
                    }
                        ${
                          formik.touched.email && !formik.errors.email
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.password && formik.errors.password ? "error-box" : ""
                    }
                        ${
                          formik.touched.password && !formik.errors.password
                            ? "succes-box"
                            : ""
                        }
                        `}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.phone && formik.errors.phone ? "error-box" : ""
                    }
                        ${
                          formik.touched.phone && !formik.errors.phone
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <span style={{ color: "red" }}>{formik.errors.phone}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    className="form-control"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Book_ID</label>
                  <input
                    name="book_id"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.book_id}
                    type={"text"}
                    className={`form-control`}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Issue_date</label>
                  <input
                    name="issue_date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.issue_date}
                    type={"date"}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Return_date</label>
                  <input
                    name="return_date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.return_date}
                    type={"date"}
                    className="form-control"
                  />
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

export default EditMember