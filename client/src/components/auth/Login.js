import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import { loginUser } from "../../redux/actions/auth";
// import { loadProfile } from "../../redux/actions/profile";

import { setAlert } from "../../redux/actions/alert";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // useEffect(() => {
  //   console.log("hey");
  //   removeAlert();
  // }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const id = uuidv4();
    props.loginUser({ email, password });
  };

  // redirect if logged in
  if (props.isAuthorized) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form onSubmit={onSubmit} className="form" action="dashboard.html">
        <div className="form-group">
          <input
            onChange={onChange}
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            onChange={onChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </div>
        <input
          onChange={onChange}
          type="submit"
          className="btn btn-primary"
          value="Login"
        />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    isAuthorized: state.auth.isAuthenticated,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { setAlert, loginUser })(Login); // will return us a new component
