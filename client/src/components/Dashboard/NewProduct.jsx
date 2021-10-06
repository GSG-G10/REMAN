import { useState } from 'react';
import { Form, Input, Button, Select, InputNumber, message, Modal } from 'antd';
import axios from 'axios';

import DragDrop from './DragDrop';

import './style.css';
const { Item } = Form;
const { Option } = Select;

const error = () => message.error('You should upload a new image');

const NewProduct = () => {
  const [imageUrl, setUrlImage] = useState('');

  const onFinish = (values) => {
    if (!imageUrl) return error();

    values.imageUrl = imageUrl;
    console.log(values);

    Modal.warning({
      content: 'Are you sure you want to upload a new product',
      onOk() {
        const { productName, productCategory, imageUrl, Price, Discount } =
          values;
        setUrlImage('');
        axios.post('/add-new-product', {
          productName,
          productCategory,
          imageUrl,
          Price,
          Discount,
        });
      },
    });
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
          <Input autoFocus />
        </Item>

        <Item
          label="Select"
          name="category"
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
          <Item label="Price" name="price">
            <InputNumber />
          </Item>
          <Item label="Discount" name="discount">
            <InputNumber
              defaultValue={100}
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace('%', '')}
            />
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
