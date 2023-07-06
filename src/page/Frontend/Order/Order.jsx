import React, { useState } from 'react'
import CartOrder from '../../../components/Order/CartOrder'
import { useSelector } from 'react-redux'
import { forEach, values } from 'lodash'
import { orderApi } from '../../../Api/orderApi'
import { orderDetaillApi } from '../../../Api/orderDetailApi'
import { toast } from 'react-toastify'

const Order = () => {
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'ETH',
      });
    const { cartAr } = useSelector(state => state.cart)
    const [data, setData] = useState({
        "name": '',
        "email": '',
        "address": '',
        "phone": '',
        "note": '',
    })
    let total =0;
    let qty=0;
    cartAr.forEach(value=>{
        total+=value.total
        qty+=value.qty
    })
    console.log(total);
    const handleSubmitOrder = (e) => {
        e.preventDefault();
        const addOrder = async (data, carts) => {
            const senData = { "data": data }
            const response = await orderApi.add(senData)
            console.log(response);
            if (response.status == 200) {
                for (const value of carts) {
                    let data2 = {
                        "price": value.price,
                        "qty": value.qty,
                        "amount": value.total,
                        "order": response.data.data.id,
                        "product": value.id
                    };
                    let orderDetailData = { "data": data2 };
                    let response2 = await orderDetaillApi.add(orderDetailData);
                    if (response2.status == 200) {
                        toast.success(' Create successfully!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                }

            }
        }
        addOrder(data, cartAr);
    }
    return (
        <div className="">
            <div className="container ">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="fs-1 fw-bold color-red  text-center">Order</h3>
                        <form onSubmit={handleSubmitOrder} method="post">
                            <div className="row">
                                <div className>
                                    <h3 className="color-red my-3 mt-5 text-uppercase">Delivery information</h3>
                                    <div>
                                        <div className="row">
                                            <div className="col-6 my-3">
                                                <div className=" wave-group">
                                                    <label className="form-label mb-3">
                                                        <span className="">Name</span>
                                                    </label>
                                                    <input onChange={(e) => setData({ ...data, name: e.target.value })} required type="text" className="form-control py-3 fs-5" placeholder='Name' />
                                                </div>
                                            </div>
                                            <div className="col-6 my-3">
                                                <div className="wave-group">
                                                    <label className="form-label mb-3">
                                                        <span className=""> Email</span>
                                                    </label>
                                                    <input onChange={(e) => setData({ ...data, email: e.target.value })} required type="text" className="form-control py-3 fs-5" placeholder='Email' />
                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <div className="wave-group">
                                                    <label className="form-label mb-3">
                                                        <span className=""> Phone</span>
                                                    </label>
                                                    <input onChange={(e) => setData({ ...data, phone: e.target.value })} required type="text" className="form-control py-3 fs-5" placeholder='Phone' />
                                                </div >
                                            </div >
                                        </div >
                                        <div className="row">
                                        </div>
                                        <div className="my-4">
                                            <div className="wave-group">
                                                <label className="form-label mb-3">
                                                    <span className=""> Address</span>
                                                </label>
                                                <input onChange={(e) => setData({ ...data, address: e.target.value })} required type="text" className="form-control py-3 fs-5" placeholder='Address' />
                                            </div>
                                        </div >
                                        <div className="my-5">
                                            <div className="wave-group">
                                                <label className="form-label mb-3">
                                                    <span className="">Note (option)</span>
                                                </label>
                                                <textarea onChange={(e) => setData({ ...data, note: e.target.value })} required className="form-control fs-5" placeholder='' defaultValue={""} />

                                            </div>
                                        </div >
                                    </div >
                                </div >
                                <h3 className="color-red my-5">Transport</h3>
                                <div>
                                    <div className="wave-group2  border rounded p-3 d-flex justify-content-between">
                                        <div>
                                            <input required id="vanchuyen" name="vanchuyen" type="radio" defaultChecked className="input me-3" />
                                            <label htmlFor="vanchuyen" className>
                                                <span className="label-char fs-4" >Home delivery</span>
                                            </label>
                                        </div>
                                        <span className=" fs-4">0.5 NFT</span>
                                    </div>
                                    <h3 className="color-red my-5 ">Pay</h3>
                                    <div className="wave-group2  border rounded p-3 d-flex justify-content-between">
                                        <div>
                                            <input required id="giaohang" name="thanhtoan" type="radio" defaultChecked className="input me-3" />
                                            <label htmlFor="giaohang" className>
                                                <span className="label-char fs-4">Payment on delivery</span>
                                            </label>
                                        </div>
                                        <span className=" fs-4"><i className="fa-regular fa-money-bill-1" /></span>
                                    </div >
                                    <div className="wave-group2  border rounded p-3 my-3 d-flex justify-content-between">
                                        <div>
                                            <input required id="momo" name="thanhtoan" type="radio" defaultChecked className="input me-3" />
                                            <label htmlFor="momo" className>
                                                <span className="label-char fs-4">Pay with MoMo</span>
                                            </label>
                                        </div>
                                        <span className=" fs-4"><i className="fa-regular fa-money-bill-1" /></span>
                                    </div >
                                    <div className="wave-group2  border rounded p-3 my-2 d-flex justify-content-between">
                                        <div>
                                            <input required id="bank" name="thanhtoan" type="radio" defaultChecked className="input me-3" />
                                            <label htmlFor="bank" className>
                                                <span className="label-char fs-4" >Transfer</span>
                                            </label>
                                        </div>
                                        <span className=" fs-4 "><i className="fa-regular fa-money-bill-1" /></span>
                                    </div >
                                </div >
                                <div className="button-hover my-5 ">
                                    <button type='submit' className="w-100 fs-3 btn btn-danger py-3">Confirm</button>
                                </div>
                            </div >
                        </form >
                    </div >
                    <div className="col-md-4 border bg-fafa">
                        <div className="py-3 border-bottom">
                            <h3 className>Order ( {qty} Product)</h3>
                        </div>
                        <div className="list-cart-oder  " style={{ maxHeight: '300px', overflowY: 'scroll', overflowX: 'hidden' }}>
                            {cartAr.map(value => (
                                <CartOrder key={value.id} id={value.id} name={value.name} price={value.price} qty={value.qty} image={value.image} />
                            ))}


                        </div>
                        <div className="d-flex mt-5 border-bottom border-top py-5">
                            <input style={{ height: 40 }} type="text" className="border fs-4 p-2 rounded-2 w-75" placeholder="Discount code" />
                            <button className="btn bg-info ms-3 text-white">Apply</button>
                        </div>
                        <div className="d-flex justify-content-between my-4">
                            <div className="fs-4 fw-bold">Provisional:</div>
                            <span className="fs-4 color-red fw-semibold">{formatter.format(total) } NFT</span>
                        </div>
                        <div className="d-flex justify-content-between my-5">
                            <div className="fs-4 fw-bold">Transport fee:</div>
                            <span className="fs-4 color-red fw-semibold">0.5 NFT</span>
                        </div>
                        <div className="border-bottom" />
                        <div>
                        </div>
                        <div className="d-flex justify-content-between my-4">
                            <div className="fs-2 fw-bold">Total: </div>
                            <span className="fs-3 color-red fw-bold">{formatter.format(total+0.5)} </span>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Order
