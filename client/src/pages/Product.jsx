import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Header } from '../components';
import Footer from '../components/Footer/Footer';
import ProductComponent from '../components/Product';

function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    axios.get(`/products/${productId}`, { signal })
      .then((res) => {
        setProduct(res.data);

        return res.data;
      }).then((data) => axios.get(`/categories/${data.category_id}/products`, { signal })).then((res) => {
        setRelatedProducts(res.data.data);
      });

    return () => {
      controller.abort(signal);
    };
  }, []);

  return (
    <>
      <Header />
      <ProductComponent product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
}

export default Product;
