import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
import '../../../styles/global.css';
import join from '../../../media/join.svg';

// TO-DO's:
// - handle POST request to backend API for registration

const SignUp = () => {
  const newUser = {
    firstname: '',
    lastname: '',
    schoolenrolled: '',
    bridgegoodusername: '',
    email: '',
    phonenumber: '',
    password: '',
    created_at: new Date(),
    updated_at: new Date(),
  };

  const history = useHistory();
  const [form] = Form.useForm();

  // ant design form styling
  const layout = {
    wrapperCol: { span: 24 },
  };

  const buttonLayout = {
    col: { span: 24 },
  };

  // submitting form values
  const handleSubmit = values => {
    console.log(values);
    axios
      .post('', values)
      .then(res => {
        console.log(res);
        history.push('./dashboard');
      })
      .catch(err => {
        console.log(err);
        alert('There was an error creating an account. Please try again.');
      });
  };

  return (
    <div className="signup-container">
      <img src={join} alt=""></img>

      <div className="signup-form">
        <h1>Sign Up</h1>

        <Form
          {...layout}
          form={form}
          className="signup-form"
          name="register"
          initialValues={{
            created_at: new Date(),
            updated_at: new Date(),
          }}
          scrollToFirstError
          onFinish={handleSubmit}
        >
          <Form.Item
            name="firstName"
            required
            rules={[
              {
                required: true,
                message: 'Please input your first name!',
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            required
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="schoolenrolled"
            required
            rules={[
              {
                type: 'schoolenrolled',
                message: 'The input is not a valid school!',
              },
              {
                required: true,
                message: 'Please input the school your enrolled with!',
              },
            ]}
          >
            <Input placeholder="School Enrolled" />
          </Form.Item>

          <Form.Item
            name="bridgegoodusername"
            required
            rules={[
              {
                type: 'bridgegoodusername',
              },
              {
                required: true,
                message: 'Please input a bridgegood username!',
              },
            ]}
          >
            <Input placeholder="BRIDGEGOOD username" />
          </Form.Item>

          <Form.Item
            name="email"
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
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="phonenumber"
            rules={[
              {
                type: 'phonenumber',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item {...buttonLayout}>
            <Button type="primary" htmlType="submit" block="True">
              Register
            </Button>
          </Form.Item>

          <Form.Item name="created_at" />
          <Form.Item name="updated_at" />
        </Form>

        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
