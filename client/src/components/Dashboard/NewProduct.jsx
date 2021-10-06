import { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, message, Modal } from 'antd';
import axios from 'axios';

import DragDrop from './DragDrop';

import './style.css';
const { Item } = Form;

const error = () => message.error('You should upload a new image');

const NewProduct = () => {
  const [imageUrl, setUrlImage] = useState('');

  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (!imageUrl) return error();
    values.imageUrl = imageUrl;
    axios.post('http://localhost:5000/add-new-product', values);

    {
      Modal.success({
        content: 'New Product is added',
        onOk() {
          form.resetFields();
          setUrlImage('');
        },
      });
    }
  };
  return (
    <div className="dashboard-new-product-container">
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
        className="dashboard-new-product-container-form"
      >
        <Item
          label="Product name"
          name="productName"
          rules={[
            { required: true, message: 'Please input The New Product Name!' },
          ]}
        >
          <Input />
        </Item>

        <Item
          label="Select"
          name="productCategory"
          rules={[
            {
              required: true,
              message: 'Please input The New Product Category!',
            },
          ]}
        >
          <Select>
            <Option value="category1">category1</Option>
            <Option value="category2">category2</Option>
            <Option value="category3">category3</Option>
            <Option value="category4">category4</Option>
            <Option value="category5">category5</Option>
          </Select>
        </Item>

        <div className="dashboard-form-product-price">
          <Item label="Price" name="Price">
            <InputNumber />
          </Item>
          <Item label="Discount" name="Discount">
            <InputNumber />
          </Item>
        </div>
        <DragDrop setUrlImage={setUrlImage} imageUrl={imageUrl} />
        <Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit New Product
          </Button>
        </Item>
      </Form>
    </div>
  );
};
export default NewProduct;
