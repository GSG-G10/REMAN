import { Form, Select, InputNumber, Slider, Row, Col } from 'antd';

import 'antd/dist/antd.min.css';

const { Item } = Form;

const MinPrice = ({ minPrice, setMinPrice }) => {
  const onChangeMinPrice = (value) => setMinPrice(value);

  return (
    <Item label="Min Price">
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={1000}
            onChange={onChangeMinPrice}
            value={typeof minPrice === 'number' ? minPrice : 0}
          />
        </Col>

        <Col span={4}>
          <InputNumber
            min={1}
            max={1000}
            style={{ margin: '0 16px' }}
            value={minPrice}
            onChange={onChangeMinPrice}
          />
        </Col>
      </Row>
    </Item>
  );
};

export default MinPrice;
