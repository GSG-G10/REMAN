import React, { useEffect,useReducer } from 'react';
import { Typography,Spin ,Empty} from 'antd';
const { Title } = Typography;
import CartCard from './cartCards';
import './cart.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
let history = useHistory();
const initialState = {
  data: [],
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "fetching":
      return { loading: false, error: "", data: action.payload };
    case "loading":
      return { loading: true, error: "", data: [] };
    case "error":
      return { loading: false, error: action.payload, data: [] };
    default:
      throw new Error();
  }
}
function MainCart() {
   const [data, setData] = useState([]);
   const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const controller = new AbortController();
    const getProducts=()=>{
      dispatch({ type: "loading" })
      axios
      .get('/cart')
      .then()
      .catch((err) => {
        if (err.response.status == 401) {
          history.push('/login');
        }
      });
    }
    getData().then((res) =>  dispatch({ type: "fetching", payload: res.results }))
    .catch((error)=> dispatch({ type: "error", payload: error}))
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="main-cart">
      <Title level={4}>Shopping Cart</Title>
      <div className="cards">
      {
     state.loading? <div className='loading'>   <Spin size="large"/> </div>: (state.error?<div> Error </div>: 
      (state.data.length>0?<Cards data={state.data} />:<Empty />))
   }
     
      </div>
    </div>
  );
}

export default MainCart;
