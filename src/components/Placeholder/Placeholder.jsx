import React from 'react'
import { Link } from 'react-router-dom'

const Placeholder = () => {
    return (
        <div className="card">
            <div className="card-heart placeholder" >
            </div>
            <div className="product-cart "  >
                <Link className='placeholder'></Link>
            </div>
            <div className="card-image placeholder">
            </div>
            <div className="card-content placeholder-glow">
                <div className="card-title placeholder "></div>
                <div className="card-outher placeholder">
                    Category <span></span>
                </div>
                <div className="card-bottom">
                    <div className="price placeholder-glow">
                        <p className='placeholder'>Current Bid</p>
                        <h4 className='placeholder'></h4>
                    </div>
                    <div className="card-time placeholder-glow">
                        <p className='placeholder'>Remaining Time</p>
                        <h5 className='placeholder'>
                        </h5>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Placeholder
