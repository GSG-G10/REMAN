import React, { useEffect, useState } from "react";
import { Typography } from "antd";
const { Title } = Typography;
import { CSSTransition } from "react-transition-group";
import LoginForm from "./LoginForm";
import Social from "../SignUp/Social";

import login from "../../assets/login.gif";
import "./login.css";

const Login = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={1000} classNames="css-transition">
      <div className="backgroung-login">
        <div className="login-container">
          <div className="photo-container">
            <img className="login-photo" alt="Image-Photo" src={login} />
          </div>
          <div className="form-container1">
            <Title className="title-login" level={3}>
              Sign In to REMAN
            </Title>
            <Social />
            <LoginForm />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Login;
