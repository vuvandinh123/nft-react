import { useState, useEffect } from 'react';
import axios from 'axios';

const apiProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('/src/utils/Product.json')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return products;
}

export default apiProduct;