/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import {
  Form, Modal, Button, notification,
} from 'antd';
import axios from 'axios';

import { ControlFilled } from '@ant-design/icons';
import Categories from './Categories';
import MinPrice from './MinPrice';
import MaxPrice from './MaxPrice';
import RateStars from './RateStars';
import Name from './Name';
import FilterButton from './FilterButton';

import 'antd/dist/antd.min.css';
import './style.css';

const openNotification = (placement) => {
  notification.info({
    message: 'Notification',
    description: 'There is no content available to display',
    placement,
  });
};
const FilterProducts = ({ setFilterResult }) => {
  const [filterRequest, setFilterRequest] = useState({});
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const {
      MaxPrice, MinPrice, Name, Category, Rate,
    } = filterRequest;
    axios
      .get('/products', {
        params: {
          name: Name,
          category: Category,
          maxPrice: MaxPrice,
          minPrice: MinPrice,
          rate: Rate,
        },
      })
      .then((response) => {
        response.data.length >= 1
          ? setFilterResult(response.data)
          : openNotification('bottomLeft');
      });
  }, [filterRequest]);

  const onFinish = (values) => {
    values.MinPrice = minPrice;
    values.MaxPrice = maxPrice;
    setFilterRequest(values);
  };

  const showModal = () => setIsModalVisible(true);

  const handleOk = () => setIsModalVisible(false);

  const handleCancel = () => setIsModalVisible(false);
  return (
    <>
      <section className="filter-section">
        <Button
          className="FilterButton"
          icon={<ControlFilled />}
          size="large"
          onClick={showModal}
        >
          Filter
        </Button>
      </section>
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
