import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {AppUrl} from '../../Api/AppUrl'
function Card(props) {
  const { name, price, image, id, category,handleClick } = props;
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  }
  const onClick = ()=>{
    const data = {name, price, image, id, category}
    handleClick(data)
  }
  return (
    <div className="card">
      <div className="card-heart" onClick={toggleLike}>
        <img className="" src={isLiked ? "/src/assets/images/Heart.png" : "/src/assets/images/Heart2.png"} alt="" />
      </div>
      <div className="product-cart " onClick={onClick} >
        <span><i className="fa-solid fa-cart-arrow-down"></i></span>
        
      </div> 
      <div className="card-image ">
        <img className='' src={`${AppUrl.ImageUrl}${image}`} alt="" />
      </div>
      <div className="card-content ">
        <div className="card-title  ">{name}</div>
        <div className="card-outher "> 
          Category <span>{category}</span>
        </div>
        <div className="card-bottom">
          <div className="price">
            <p>Current Bid</p>
            <h4>{price}</h4>
          </div>
          <div className="card-time">
            <p>Remaining Time</p>
            <h5>
              <span className="card-hours"> 12</span> :
              <span className="card-min">03</span> :
              <span className="card-sec">12</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="card-btn">
        <Link to={`/product/${id}`} >Collect Now</Link>
      </div>
    </div>
  );
}

const Product = (props) => {
  return (
    <>
      <Card name={props.name} category={props.category} handleClick={props.handleClick} image={props.image} price={props.price} id={props.id} />
    </>
  )
}

export default Product