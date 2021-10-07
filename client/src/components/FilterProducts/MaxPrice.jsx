/* eslint-disable react/prop-types */
import {
  Form, InputNumber, Slider, Row, Col,
} from 'antd';

import 'antd/dist/antd.min.css';

const { Item } = Form;

const MaxPrice = ({ maxPrice, setMaxPrice, minPrice }) => {
  const onChangeMaxPrice = (value) => setMaxPrice(value);

  return (
    <Item label="Max Price">
      <Row>
        <Col span={12}>
          <Slider
            min={minPrice}
            max={1000}
            onChange={onChangeMaxPrice}
            value={typeof maxPrice === 'number' ? maxPrice : 0}
          />
        </Col>

        <Col span={4}>
          <InputNumber
            min={minPrice}
            max={1000}
            style={{ margin: '0 16px' }}
            value={maxPrice}
            onChange={onChangeMaxPrice}
          />
        </Col>
      </Row>
    </Item>
  );
};

export default MaxPrice;
