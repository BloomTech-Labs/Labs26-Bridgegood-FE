import React, { useEffect, useRef, useState } from 'react';

import { Form, Button, Checkbox, Input, Modal } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function EditUserModal({ visible, user, setEditingUserId }) {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [ form ] = Form.useForm();
  const [ firstName, setFirstName ] = useState('Alex');

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const editValue = ({ name, value }) => {
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
    console.log(editedUser);
  };

  useEffect(() => {
      form.setFieldsValue({
        first_name: user?.first_name
      })
  }, [])

  const onFinish = values => {
    console.log(Object.is(editedUser, user), editedUser, user);
    setEditingUserId(null)
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Modal
      title={`Editing ${user?.first_name} ${user?.last_name}`}
      visible={visible}
      okText="Save"
      cancelText="Cancel"
      closable={false}
      footer={null}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: 'Please input a first name!' }]}
        >
          <Input placeholder="First name..." />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
