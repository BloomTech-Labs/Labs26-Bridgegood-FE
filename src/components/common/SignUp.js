import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
// const {  QuestionCircleOutlined  } = icons;
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
  labelCol: {
    xl: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xl: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      );
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="firstName"
        className="test"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please enter your First Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        className="test"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please enter your Last Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="schoolEnrolled"
        className="test"
        label="School Enrolled"
        rules={[
          {
            required: true,
            message: 'Please enter your school that your enrolled into',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="username"
        className="test"
        label="BRIDGEGOOD Username"
        rules={[
          {
            required: true,
            message: 'Please enter your username',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        className="test2"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'The email provided is not valid',
          },
          {
            required: true,
            message: 'Please enter your E-mail',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        className="test"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please enter your phone number',
          },
        ]}
      >
        <Input
        // addonBefore={prefixSelector}
        // style={{
        //   width: '100%',
        // }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        className="test"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please enter your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        // className="test8"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject('Please accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          By checking this, I confirm that I am 18 years of age and older{' '}
          <br></br>
          and I agree to follow the terms for using this space.
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
}
