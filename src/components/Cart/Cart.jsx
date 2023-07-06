import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, qtyCart } from '../../redux/cartSlice';
import { AppUrl } from '../../Api/AppUrl';

const Cart = (props) => {
  const remove = () => {
    dispatch(DeleteCart(props.id))
  }
  const dispatch = useDispatch();
  const [qtyValue,setQtyValue] = useState(props.qty)
  const handleQuantityChange = (event) => {
    const quantity = event.target.value;
  }
  useEffect(()=>{
    setQtyValue(props.qty)
  },[props.qty])
  const handleQuantityClickPlus = () => {
    dispatch(qtyCart({id:props.id,qty:qtyValue+1}))
    console.log(qtyValue);
  }
  
  const handleQuantityClickMinus = () => {
    dispatch(qtyCart({id:props.id,qty:qtyValue-1}))
  }
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'ETH',
  });
  console.log(props);
  return (

    <div className="cart-item">
      <div className="cart-image"><img width={70} src={`${AppUrl.ImageUrl}${props.image}`} alt="" />
      </div>
      <div className="cart-title-item">
        <h3>{props.name}</h3>
        <p className='trash' onClick={remove}><i className='fa fa-trash '></i>Delete</p>
      </div>
      <div className="cart-price">{formatter.format(props.price) }</div>
      <div className="cart-quantity">
        <span onClick={handleQuantityClickPlus}><i className="fa-solid fa-plus"></i></span>
        <input value={qtyValue} onChange={handleQuantityChange} type="text" />
        <span onClick={handleQuantityClickMinus}><i className="fa-solid fa-minus"></i></span>
      </div>
      <div className="cart-total">
        <span className='total-mb'>Total: </span ><span>{formatter.format(props.total) }</span>

      </div>
    </div>
  )
}

export default Cart
