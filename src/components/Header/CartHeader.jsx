import React from 'react'
import { AppUrl } from '../../Api/AppUrl'

const CartHeader = (props) => {
    return (
        <li className='my-2'>
            <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center"><img width={'100%'} src={`${AppUrl.ImageUrl}${props.image}`} alt="" /></div>
                <div className="col-7">
                    <h3 className='my-2'>{props.name}</h3>
                    <p className='my-3'>gia: {props.price}</p>
                    <span className='my-2 border px-3'>{props.qty}</span>
                </div>
                <div onClick={() => props.handleClickCloseCart(props.id)} className="col-1">x</div>
            </div>
        </li>
    )
}

export default CartHeader
