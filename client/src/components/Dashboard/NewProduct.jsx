import { useState, useEffect } from 'react';
import {
  Form, Input, Button, Select, InputNumber, Modal,
} from 'antd';
import axios from 'axios';

import './style.css';

const { Item } = Form;
const { Option } = Select;

const NewProduct = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get('/categories')
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  const onFinish = (values) => {
    Modal.warning({
      content: 'Are you sure you want to upload a new product',
      onOk() {
        axios.post('/add-new-product', values);
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
          label="Product Name"
          name="name"
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
            {categories && categories.map((e) => (
              <Option value={e.id}>{e.name}</Option>
            ))}
          </Select>
        </Item>

        <div className="dashboard-form-product-price">
          <Item label="Price" name="price">
            <InputNumber
              formatter={(value) => `${value}$`}
              parser={(value) => value.replace('$', '')}
            />
          </Item>
          <Item label="Discount" name="discount">
            <InputNumber

              // eslint-disable-next-line react/jsx-props-no-multi-spaces
              min={0}
              max={100}
              formatter={(value) => `${value}%`}
              parser={(value) => value.replace('%', '')}
            />
          </Item>
        </div>
        <Item
          label="Image URL"
          name="url"
          rules={[
            {
              required: true,
              message: 'Please input The New Product URL Image!',
            },
          ]}
        >
          <Input />
        </Item>
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
