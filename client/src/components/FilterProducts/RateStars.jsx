import { Form, Rate } from 'antd';
import 'antd/dist/antd.min.css';

const { Item } = Form;

const RateStars = () => (
  <Item name="Rate" label="Rate">
    <Rate />
  </Item>
);
export default RateStars;
