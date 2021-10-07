import React ,{useState} from 'react';
import { Card ,InputNumber} from 'antd';
import Img from '../components/common/Img';
import 'antd/dist/antd.min.css';
function CartCard(props) {
  const [productNumber, setproductNumber] = useState(1)
  function onChange(value) {
    setproductNumber(value);
  }
  return <Card  className='cart-card'>
    <Img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'alt='product' imgClass='card-image'/>
    <InputNumber min={1} max={10} defaultValue={productNumber} onChange={onChange} style={{height:'35px'}} />
    <span>  price : </span>
  </Card>;
}

export default CartCard;
