/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

import './style.css';

const SignUpForm = () => {
  const history = useHistory();

  const error = () => {
    message.error('error');
  };

  const onFinish = (values) => axios
    .post('/register', values)

    .then((data) => {
      data.status === 200 ? history.push('/') : error();
    });

  return (
    <div className="form-container">
      <Form
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="Username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error('The two passwords that you entered do not match!'),
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Link to="/login">Return to login</Link>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
