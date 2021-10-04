import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Typography, Image } from 'antd';

import SignUpForm from './SignUpForm';
import Social from './Social';

import signup from '../../assets/signup.png';
import './style.css';

const { Title } = Typography;

const SignUp = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);

    return () => setInProp(false);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={1000} classNames="css-transition">
      <section className="signup-section">
        <section className="form-section">
          <Title level={3}>Sign up with REMAN</Title>
          <Social />
          <div className="form-container">
            <SignUpForm />
          </div>
        </section>
        <section className="bg-section">
          <Image width="100%" height="100%" src={signup} alt="signup-bg" />
        </section>
      </section>
    </CSSTransition>
  );
};
export default SignUp;
