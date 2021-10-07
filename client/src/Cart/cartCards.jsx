import React ,{useState} from 'react';
import { Card ,InputNumber} from 'antd';
import Img from '../components/common/Img';
import 'antd/dist/antd.min.css';
function CartCard(props) {
  const [productNumber, setproductNumber] = useState(1)
  const {image ,price ,qunatity , name}=props.product
  function onChange(value) {
    setproductNumber(value);
  }
  return <Card  className='cart-card'>
    <span style={{width:'150px'}}>  {name} </span>
    <Img src={image}alt='product' imgClass='card-image'/>
    <InputNumber min={1} max={10} defaultValue={productNumber} onChange={onChange} style={{height:'35px'}} />
    <span>  price :{price} </span>
  </Card>;
}

export default CartCard;
