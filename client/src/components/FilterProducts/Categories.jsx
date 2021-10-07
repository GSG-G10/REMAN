import { useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.min.css';

const { Option } = Select;
const { Item } = Form;

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // eslint-disable-next-line max-len
  const categoryList = categories.map((category) => <Option key={category.id} value={category.id}>{category.name}</Option>);

  useEffect(() => {
    axios.get('/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Item name="Category" label="Category">
      <Select>
        {categoryList}
      </Select>
    </Item>
  );
};
export default Categories;
