import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import apiProduct from '../../../utils/apiProduct'
import { AppUrl } from '../../../Api/AppUrl'
import ProductList from '../../../components/ProductList/ProductList'
const ProductDetail = (props) => {
  window.scrollTo(0,0)
  const {name,price,image,description} = props;
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    if(name != undefined){
      setLoading(false)
    }
  })
  const {page}= useParams()
  var params = {
      populate:'*',
      'pagination[page]':page||1,
      'pagination[pageSize]':3,
    }
  return (
    <>
    <div id="loading" className={`loaders ${loading == true ? 'active' : ''}`}>
      <div className="spinner"></div>
    </div>
    <div className="container">
      <div className="product_detail">
          <div className="detail-left">
            <div style={{ borderRadius:"15px",overflow:"hidden" }} className="image"><img  src={`${AppUrl.ImageUrl}${image}`} alt="" /></div>
          </div>
          <div className="detail-right">
            <div className="use">
              <div className="use-name"><p>Mutant Ape Yacht Club <img src="/src/assets/images/tich.png" alt="" /></p></div>
              <div className="use-right">
                <div className="use-heard"><i className="fa-regular fa-heart"></i></div>
                <div className="use-share"><i className="fa-solid fa-share-nodes"></i></div>
                <div className="use-report"><i className="fa-solid fa-exclamation"></i></div>
              </div>
            </div>
            <div className="name-product">{name}</div>
            <span className="top">6198</span>
            <span className='type'>Listed From</span>
            <div className="price">
              <div className="price-title"><span>Price</span><span>Ends in</span></div>
              <div className="price-eth">
                <span>{price} ETH </span>
                <div className="sale">
                  <span><span className='time'> 01 </span>Days</span>
                  <span><span className='time'> 03 </span> Hours</span>
                  <span><span className='time'> 45 </span> Mins</span>
                  <span><span className='time'> 49 </span>Secs</span>
                </div>
              </div>
              <p><span><i className="fa-solid fa-arrow-up-right-dots"></i>10%</span> above the floor price 10.87 ETH</p>
            </div>
            <div className="buy">
              <a href="">Buy Now</a>
            </div>
            <div className="dec">
              <p>This NFT is a third-party listing:</p>
              <ul>
                <li> To complete the transaction, you will need to pay a gas fee and wait for the blockchain confirmation which normally takes around 10 minutes; and</li>
                <li>You are responsible for verifying the identity, legitimacy, and authenticity of this NFT.</li>
              </ul>
            </div>
          </div>
        </div>
        <ProductList params={params} page={page}/>
      </div>
      
    </>
  )
}

export default ProductDetail