import React from 'react';
import { Form, Input, Button, message, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import * as Realm from "realm-web";
import { app } from './App';
const { Title } = Typography;
const RegisterForm = (props) => {
  const [form] = Form.useForm();

  async function registerEmailPassword(email, password) {
    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      return true;
    } catch (err) {
      console.error("Failed to register", err);
    }
  }

  const onFinish = (values) => {
    registerEmailPassword(values.username, values.password).then(user => {
      props.togglePage('login');
      message.success('Successfully Registered. Please login.');
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
          style={{ margin: 'auto', marginTop: '5%' }}
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
              {
               pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
               message: 'Password should contain 1 caps, 1 special symbol, 8 characters length'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="repassword"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Retype-Password didnt matched with above Password. Please enter same as above!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Re-Type Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Create Account
            </Button>
            Or <a href="javascript:void('0');" onClick={() => props.togglePage('login')}>Login!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterForm;
