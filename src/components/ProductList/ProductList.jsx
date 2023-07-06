import React, { useEffect, useState } from 'react'
import Product from '../Product';
import { productApi } from '../../Api/productApi'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { byToCart } from '../../redux/cartSlice';
import Pagination from '../Paginate/Pagination'

import Placeholder from '../Placeholder/Placeholder';
import { useLocation } from 'react-router';
const ProductList = (props) => {
  const {page,filterKey,filterPrice,filterQty,filterCategory,style} = props
  const [products, setProducts] = useState([]);
  const [placeholder,setPlaceholder] = useState(()=>(Array(18).fill(null)))
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch()
  

  const [totalPage, setTotalPage] = useState(1)
  useEffect(() => {
    const fetchData = async () => {
      const response = await productApi.getAll(props.params);
      setProducts(response.data.data);
      setTotalPage(response.data.meta.pagination.pageCount)
    }
    fetchData()
  }, [page,filterKey,filterPrice?.min || null,filterPrice?.max || null,filterQty,filterCategory])

  useEffect(() => {
    const savedCart = Cookies.get("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  var pagalation = '';
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  if (props.navigation) {
    pagalation = <Pagination  totalPage={totalPage} currentPage={props.page} basePath="?page=" />
  }
  
  const { cartAr } = useSelector(state => state.cart)
  const addToCart = (product) => {
    dispatch(byToCart(product));

  };
  return (
    <>
      <div className={`list-cards ${style || ''}`} >
        
        {
          products.length!=0 ? (
            products.map(e => {
              return (
                <Product key={e.id} id={e.id} handleClick={addToCart} name={e.attributes.productName} image={e.attributes.image.data[0].attributes.url} category={e.attributes.category.data?.attributes.categoryName} price={e.attributes.price} />
              )
            })
          )
          : (
            placeholder.map(e=>(
              <Placeholder key={Math.random()}/>
            ))
          )
          
        }

      </div>
      {pagalation}
    </>

  )
}

export default ProductList