import { Form, Button } from 'antd';
import 'antd/dist/antd.min.css';

const { Item } = Form;

// eslint-disable-next-line react/prop-types
const FilterButton = ({ handleCancel }) => (
  <Item wrapperCol={{ span: 12, offset: 6 }}>
    <Button onClick={handleCancel} type="primary" htmlType="submit">
      Filter
    </Button>
  </Item>
);
export default FilterButton;
