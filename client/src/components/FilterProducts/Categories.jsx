import { Form, Select } from 'antd';
import 'antd/dist/antd.min.css';

const { Option } = Select;
const { Item } = Form;

const Categories = () => (
  <Item name="Categories" label="Categories">
    <Select>
      <Option value="red">Red</Option>
      <Option value="green">Green</Option>
      <Option value="blue">Blue</Option>
    </Select>
  </Item>
);
export default Categories;
