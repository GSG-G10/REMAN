import React, { useEffect } from 'react';
import Header from '../components/Header/index';
import MainCart from './mainCart';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { Redirect } from 'react-router';
let history = useHistory();

function Cart() {
  useEffect(() => {
    axios
      .get('/cart')
      .then()
      .catch((err) => {
        if (err.response.status == 401) {
          history.push('/login');
        }
      });
    return () => {};
  }, []);
  return (
    <div>
      <Header />
      <MainCart />
      <Footer />
    </div>
  );
}

export default Cart;
