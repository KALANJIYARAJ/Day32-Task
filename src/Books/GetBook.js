import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";


function GetBook() {
  const {user,setUser} = useContext(UserContext);
  const [id, setId] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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

      return error;
    },
    onSubmit: async (values) => {
      try {
         await axios.put(
          `https://6374714408104a9c5f8031bc.mockapi.io/Member/2`,
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
        // const user1 = await axios.get(`https://6374714408104a9c5f8031bc.mockapi.io/Member`)
        
        //error

        // let index = user1.data.findIndex(() => user1.data.email == user.username)
        // console.log(index);
        // setId(index+1);

        const findUser = await axios.get(`https://6374714408104a9c5f8031bc.mockapi.io/Member/2`)
        // console.log(findUser.data);
        // formik.setValues(findUser.data)
        formik.setFieldValue("name",findUser.data.name)
        formik.setFieldValue("email",findUser.data.email)
        formik.setFieldValue("issue_date",findUser.data.issue_date)
        formik.setFieldValue("return_date",findUser.data.return_date)
        formik.setFieldValue("book_id",params.id)
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

export default GetBook;
