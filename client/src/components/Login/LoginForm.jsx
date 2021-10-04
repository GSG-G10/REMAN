import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
const msg = 'nnnnnnnnoooooooo'
const LoginForm = () => {
  const [loginData, setLoginData] = useState(null);
  const onFinish = (values) => {
    setLoginData(["Success:", values]);
  };

  return (
    <div className="login-form">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        scrollToFirstError
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              type: 'string',
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input autoFocus />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: msg ||"Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="div-remember-return">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <span>you don't have Account? </span>
            <Link to="/signup"> Sign up</Link>
          </Form.Item>
        </div>

        <Form.Item>
          <Button className="btn-form" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button
        className="btn-form"
        type="default"
        style={{ border: "1px solid #ddd" }}
      >
        <Link to="/">Return to Home page</Link>
      </Button>
    </div>
  );
};

export default LoginForm;
