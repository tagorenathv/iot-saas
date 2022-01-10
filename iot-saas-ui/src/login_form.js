import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import * as Realm from "realm-web";
import {app} from './App';
const { Title } = Typography;
const LoginForm = (props) => {
    async function loginEmailPassword(email, password) {
        const credentials = Realm.Credentials.emailPassword(email, password);
        try {
          // Authenticate the user
          app.logIn(credentials).then( (res) => {
            sessionStorage.setItem('userData', JSON.stringify(res));
            message.success('Horray!, Experience IOT-SaaS proto with Mongo ❤️');
            props.togglePage('user');
          }, (err)  => {
            message.error('Invalid Credentails. Register if no account yet!');
          });
          // `App.currentUser` updates to match the logged in user
          // assert(user.id === app.currentUser.id)
          // return user
        } catch (err) {
          console.error("Failed to log in", err);
          message.error('Try again!');
        }
      }
    
    
      const onFinish = (values) => {
        loginEmailPassword(values.username, values.password).then(user => {
          console.log("Successfully logged in!", user)
        })
      };

  return (
    <Row justify="center" align="middle">
        <Col span={6}>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{  margin:'auto', marginTop:'5%'}}
    >
      <Row justify="center" align="middle">
        <Col>
          <img src="logo.png" width='100' />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col>
          <Title>IOT SaaS</Title>
        </Col>
      </Row>

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="https://memegenerator.net/img/instances/52496446.jpg" target={'_blank'} style={{paddingLeft: 'auto'}}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="javascript:void('0');" onClick={() => props.togglePage('register')}>register now!</a>
      </Form.Item>
    </Form>
        </Col>
    </Row>
  );
};

export default LoginForm;
