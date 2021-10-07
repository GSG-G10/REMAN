/* eslint-disable no-unused-expressions */
import {
  Form, Input, Button, Checkbox, message,
} from 'antd';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const { Item } = Form;

const LoginForm = () => {
  const history = useHistory();

  const error = () => {
    message.error('You must remmeber your password :D');
  };

  const onFinish = (values) => axios
    .post('/login', values)

    .then((data) => {
      data.status === 200 ? history.push('/') : error();
    });

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
        <Item
          label="Username"
          name="name"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input autoFocus />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Item>

        <div className="div-remember-return">
          <Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Item>
          <Item name="remember" valuePropName="checked">
            <span>
              you dont have Account?
            </span>
            <Link to="/signup"> Sign up</Link>
          </Item>
        </div>

        <Item>
          <Button className="btn-form" type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
      <Button
        className="btn-form"
        type="default"
        style={{ border: '1px solid #ddd' }}
      >
        <Link to="/">Return to Home page</Link>
      </Button>
    </div>
  );
};

export default LoginForm;
