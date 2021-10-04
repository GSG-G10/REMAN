import { useState, useEffect } from 'react';
import { Form, Modal, Button } from 'antd';

import Categories from './Categories';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';
import RateStars from './RateStars';
import Name from './Name';
import FilterButton from './FilterButton';

import 'antd/dist/antd.min.css';
import './style.css';

import { ControlFilled } from '@ant-design/icons';

const FilterProducts = () => {
  const [data, setData] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    console.log(data);
    // return () => setData({})
  }, [data]);

  const onFinish = (values) => {
    values['Min Price'] = minPrice;
    values['Max Price'] = maxPrice;
    setData(values);
  };

  const showModal = () => setIsModalVisible(true);

  const handleOk = () => setIsModalVisible(false);

  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Button
        className="FilterButton"
        icon={<ControlFilled />}
        size="large"
        onClick={showModal}
      >
        Search
      </Button>
      <Modal
        visible={isModalVisible}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form onFinish={onFinish}>
          <Name />
          <Categories />
          <MinPrice setMinPrice={setMinPrice} minPrice={minPrice} />
          <MaxPrice
            setMaxPrice={setMaxPrice}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
          <RateStars />
          <FilterButton handleCancel={handleCancel} />
        </Form>
      </Modal>
    </>
  );
};

export default FilterProducts;
