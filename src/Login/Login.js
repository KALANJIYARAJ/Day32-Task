
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
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} class="user">
                      <div class="form-group">
                        <input
                          name="username"
                          onChange={formik.handleChange}
                          values={formik.values.username}
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div class="form-group">
                        <input
                          name="password"
                          onChange={formik.handleChange}
                          values={formik.values.password}
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </button>

                      <hr />
                      <Link
                        to={"/portal/books"}
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </Link>
                      <Link
                        to={"/portal/books"}
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </Link>
                    </form>
                    <hr />
                    <div class="text-center">
                      <Link class="small" to={"/forgot"}>
                        Forgot Password?
                      </Link>
                    </div>
                    <div class="text-center">
                      <Link class="small" to={"/accout"}>
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