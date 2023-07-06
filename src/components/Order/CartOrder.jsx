import React from 'react'
import { AppUrl } from '../../Api/AppUrl'
import { Link } from 'react-router-dom';
const CartOrder = (props) => {
    const { name, price, qty, image,id } = props;
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'ETH',
    });
    return (
        <div className="cart-oder mt-3">
            <div className="row">
                <div className="col-2  rounded-2">
                    <div className="overflow-hidden" style={{ height: 50, width: 50, borderRadius: 5 }}>
                        <img className="w-100 h-100" src={AppUrl.ImageUrl + image} alt />
                    </div>
                </div>
                <div className="col-6 ">
                    <h5><Link to={'/product/'+id} className="link-hover fs-5" >{name}</Link></h5>
                    <span className='px-2 fs-5 border'>{qty}</span>
                </div>
                <div className="col-3 fs-5"><span className="color-secondary">{formatter.format(price)}</span></div>
            </div>
        </div>
    )
}

export default CartOrder
