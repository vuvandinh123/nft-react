import React from 'react'
import './Title.scss'
const ContentHome = () => {
  return (
    <div>
      <section className="container">
        <div className="content-home">
          <div className="title">
            <p className="animationTop">Buy, Sell, And</p>
            <div className="animationTop delay-01">
              <img src="/src/assets/images/title1.png" alt="" />
              Showcase
            </div>
            <p className="animationTop delay-02">
              Super <span className="color-red"> NFTs </span>
              <img src="/src/assets/images/title2.png" alt="" />
            </p>
          </div>
          <div className="title-text animationLeft">
            <p>
              Discover, collect, and sell extraordinary NFTs through our awesome
              platform. Express yourself by your artwork though us. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quidem omnis fuga quod magnam
              architecto sed debitis ratione earum aspernatur eligendi!
            </p>
            <button>Explore NFTs</button>
          </div>
        </div>
        <div className="content-image">
          <div className="image-item animationTop">
            <img src="/src/assets/images/image1.png" alt="" />
          </div>
          <div className="image-item animationTop">
            <img src="/src/assets/images/image2.png" alt="" />
          </div>
          <div className="image-item animationTop">
            <img src="/src/assets/images/image3.png" alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContentHome