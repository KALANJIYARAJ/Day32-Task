
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Login() {
  const {user,setUser} = useContext(UserContext);
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      enable: "",
    },
    onSubmit: (values) => {
   if (values.username === "admin@gmail.com") {
        if (values.password === "admin123") {
          alert("You are a admin");
          setUser({ username: values.username,
                    password: values.password,
                    enable:true });
          navigate("/portal/books");
        } else {
          alert("username or password incorrect");
        }
      } else {
        alert("You are must be a user");
        setUser({ username: values.username,
            password: values.password,
            enable:false });
        navigate("/portal/books");
      }
    },
  });

 

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <input
                          name="username"
                          onChange={formik.handleChange}
                          values={formik.values.username}
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          onChange={formik.handleChange}
                          values={formik.values.password}
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label className="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>

                      <hr />
                      <Link
                        to={"/portal/books"}
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw"></i> Login with Google
                      </Link>
                      <Link
                        to={"/portal/books"}
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </Link>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to={"/forgot"}>
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to={"/accout"}>
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
