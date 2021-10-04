import { Form, Rate } from 'antd';
import 'antd/dist/antd.min.css';

const { Item } = Form;

const RateStars = () => (
  <Item name="rate" label="Rate">
    <Rate />
  </Item>
);
export default RateStars;
