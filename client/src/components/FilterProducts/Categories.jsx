import { Form, Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;
const { Item } = Form;

const Categories = () => (
  <Item name="Category" label="Category">
    <Select>
      <Option value="category1">category1</Option>
      <Option value="category2">category2</Option>
      <Option value="category3">category3</Option>
      <Option value="category4">category4</Option>
      <Option value="category5">category5</Option>
    </Select>
  </Item>
);
export default Categories;
