import React, { useEffect, useState } from 'react'
import Cart from '../Cart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CardItem() {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'ETH',
      });
    const { cartAr } = useSelector(state => state.cart)
    const reversedCartItems = [...cartAr].reverse();
    let total=0;
    reversedCartItems.forEach((e)=>{
        total+=e.total;
    })
    if (cartAr.length > 0) {
        return (
            <>
                <div className='cart'>
                    <div className="container">
                        <div className="cart-title">
                            <div className="title-item"><span>Product</span></div>
                            <div className="title-item"><span>Title</span></div>
                            <div className="title-item"><span>Price</span></div>
                            <div className="title-item"><span>Quantity</span></div>
                            <div className="title-item"><span>Subtotal</span></div>
                        </div>
                        <div className="cart-body">
                            {
                                reversedCartItems.map(e => {
                                    return (<Cart key={e.id} id={e.id} total={e.total}  name={e.name} qty={e.qty} price={e.price} image={e.image} />)
                                })
                            }
                        </div>
                    </div>
                    <div className="container">
                        <div className="cart-bottom">

                            <div className="right">
                                <div className="total-name ">Total: <span className="ms-3 total-price">{formatter.format(total) } </span></div>

                            </div>
                            <div className="left">
                                <div className="buy"><Link className='text-white' to={'/order'} >BUY</Link> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    else {
        return (
            <>
                <p style={{ textAlign: 'center', padding: '100px', fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '10px' }}>cart is empty</p>
            </>
        )
    }


}

const CardList = () => {


    return (
        <>
            <CardItem />
        </>



    )
}

export default CardList