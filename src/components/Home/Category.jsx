import React, { useState, useEffect, useRef } from 'react'
import './Category.scss'

const Category = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const contentRef = useRef(null);

    const handleScroll = () => {
        const itemWidth = contentRef.current.querySelector('.category-header').offsetWidth;
        console.log(itemWidth)
    };

    useEffect(() => {
        contentRef.current.scrollLeft = scrollPosition;
    }, [scrollPosition]);



    return (
        <div className="category-home">
            <div className="brub">
                <div className="brub-item" />
                <div className="brub-item" />
                <div className="brub-item" />
                <div className="brub-item" />
            </div>
            <div className="category-header">
                <h3>Browse by Category</h3>
                <div className="arow">
                    <button id="prev" onClick={handleScroll} >
                        <i className="fa-solid fa-arrow-left" />
                    </button>
                    <button id="next">
                        <i className="fa-solid fa-arrow-right" />
                    </button>
                </div>
            </div>
            <div className="category-content">
                <div className="category-list-card">
                    <div className="category-card-item" ref={contentRef} >
                        <div className="image">
                            <img src="/src/assets/images/category1.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Art</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/category2.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Music</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/category3.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Photography</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/category4.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Sports</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/nft1.jpg" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Sports</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/aft2.jpg" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Sports</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/category4.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Sports</a>
                        </div>
                    </div>
                    <div className="category-card-item">
                        <div className="image">
                            <img src="/src/assets/images/category4.png" alt="" />
                        </div>
                        <div className="category-item-footer">
                            <a href="#">Sports</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category