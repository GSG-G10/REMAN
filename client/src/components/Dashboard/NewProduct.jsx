import { useState, useEffect } from 'react';
import { Form, Input, Button, Select, InputNumber, message, Modal } from 'antd';
import axios from 'axios';

// import DragDrop from './DragDrop';

import './style.css';
const { Item } = Form;
const { Option } = Select;

const error = () => message.error('You should upload a new image');

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
        // const { productName, productCategory, imageUrl, Price, Discount } =
        //   values;
          console.log(values)
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
