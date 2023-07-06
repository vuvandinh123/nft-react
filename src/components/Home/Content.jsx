import React from 'react'
import CardList from '../CartList'
import Category from './Category'
import './Content.scss'
import ProductList from '../ProductList/ProductList'
import { useParams } from 'react-router'
const Content = () => {
    const {page}= useParams()
    var params = {
        populate:'*',
        'pagination[page]':page||1,
        'pagination[pageSize]':6,
      }
    return (
        <div>
            <section>
                <div className="container">
                    <div className="trending">
                        <div className="image-card">
                            <img src="/src/assets/images/card1.png" alt="" />
                        </div>
                        <div className="card-trending-content">
                            <h2>JUNK FOOD PARTY #137</h2>
                            <p>
                                Created by <span> MitsuoKatori</span>
                            </p>
                            <div className="time-sale">
                                <div className="time-sale-item">
                                    <span className="days">0</span>
                                    <p>DAYS</p>
                                </div>
                                <div className="time-sale-item">
                                    <span className="hours">4</span>
                                    <p>HRS</p>
                                </div>
                                <div className="time-sale-item">
                                    <span className="minutes">14</span>
                                    <p>MINS</p>
                                </div>
                                <div className="time-sale-item">
                                    <span className="seconds">59</span>
                                    <p>SECS</p>
                                </div>
                            </div>
                            <p className="bid">Current Bid</p>
                            <h3>1.0324 ETH</h3>
                            <div className="btn-link-card">
                                <a href="#" className="btn">
                                    Place a Bid
                                </a>
                                <a href="#" className="btn">
                                    View Artwork
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="collections">
                        <div className="collecttion-title">
                            <h3>
                                Featured Collections <img src="/src/assets/images/lua.png" alt="" />
                            </h3>
                            <p>
                                Discover, collect, and sell extraordinary NFTs through our awesome
                                platform.
                            </p>
                        </div>
                        <ProductList params={params} page={page}/>
                        <div className="card-more">
                            <a href="#" className="more">
                                Views More
                            </a>
                        </div>
                    </div>
                    <Category />
                    <div className="collections">
                        <div className="collections-header">
                            <h3>Top Collections</h3>
                            <div className="collections-btn">
                                <button className="btn">Today</button>
                                <button className="btn">Last 7 Day</button>
                                <button className="btn">Last 30 Day</button>
                            </div>
                        </div>
                        <div className="collections-content">
                            <div className="list-items">
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections1.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>CloneX</h4>
                                        <p>302.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collection13.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Otherdeed</h4>
                                        <p>302.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections2.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>ApeYachtClub</h4>
                                        <p>302.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections3.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Broadside</h4>
                                        <p>302.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span className="red">-40.005%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collection4.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>SIM Dogs</h4>
                                        <p>802.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections6.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Invisible Friends</h4>
                                        <p>342.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections7.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Doodles</h4>
                                        <p>422.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections8.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Moonbirds</h4>
                                        <p>872.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span className="red">-10.01%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections9.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>ApepeYachtClub</h4>
                                        <p>122.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span className="red">-5.01%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collection10.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>RENGA</h4>
                                        <p>333.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections11.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>PudgyPenguins</h4>
                                        <p>652.1k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span className="red">-30.05%</span>
                                    </div>
                                </div>
                                <div className="clton-item">
                                    <div className="clton-img">
                                        <img src="/src/assets/images/collections12.png" alt="" />
                                    </div>
                                    <div className="clton-title">
                                        <h4>Cool Cats</h4>
                                        <p>212.6k ETH</p>
                                    </div>
                                    <div className="trend">
                                        <span>+70.05%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="collections-all">
                                <a href="#" className="btn">
                                    View All Collections
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="artist">
                        <div className="artist-title">
                            <h3>Most Popular Artist</h3>
                            <div className="arow">
                                <button id="prev2">
                                    <i className="fa-solid fa-arrow-left" />
                                </button>
                                <button id="next2">
                                    <i className="fa-solid fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                        <div className="container"></div>
                        <div className="artist-content">
                            <div className="artist-list-card">
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist1.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr1.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Mitchell Starc</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist2.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr2.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Pat Cummins</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn un follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist1.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr3.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Josh Hazlewood</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist2.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr1.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Mitchell Starc</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist2.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr1.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Mitchell Starc</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist2.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr1.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Mitchell Starc</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                                <div className="artist-item">
                                    <div className="image">
                                        <img src="/src/assets/images/artist2.png" alt="" />
                                    </div>
                                    <div className="background-artist">
                                        <img src="/src/assets/images/bgr1.png" alt="" />
                                    </div>
                                    <div className="card-title">
                                        <div>
                                            <h4>Mitchell Starc</h4>
                                            <p>20,600+ Items</p>
                                        </div>
                                        <button className="btn follow">Unfollow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="artist-all">
                            <a href="#" className="btn">
                                View All Artist{" "}
                            </a>
                        </div>
                    </div>
                    <div className="works">
                        <div className="blurs">
                            <div className="blur-item" />
                        </div>
                        <div className="work-title">
                            <h3>How it Work</h3>
                        </div>
                        <div className="list-card-work">
                            <div className="card-work-item">
                                <div className="item-image">
                                    <img src="/src/assets/images/wallet.png" alt="" />
                                </div>
                                <div className="item-title">Set up your wallet</div>
                                <p>
                                    Once you’ve set up your wallet of choice, connect it to our platform
                                    by clicking the wallet icon.
                                </p>
                            </div>
                            <div className="card-work-item">
                                <div className="item-image">
                                    <img src="/src/assets/images/wallet.png" alt="" />
                                </div>
                                <div className="item-title">Set up your wallet</div>
                                <p>
                                    Once you’ve set up your wallet of choice, connect it to our platform
                                    by clicking the wallet icon.
                                </p>
                            </div>
                            <div className="card-work-item">
                                <div className="item-image">
                                    <img src="/src/assets/images/wallet.png" alt="" />
                                </div>
                                <div className="item-title">Set up your wallet</div>
                                <p>
                                    Once you’ve set up your wallet of choice, connect it to our platform
                                    by clicking the wallet icon.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="community">
                        <div className="image">
                            <img src="/src/assets/images/join.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>Join our community</h3>
                            <p>
                                Discover, collect, and sell extraordinary NFTs through our awesome
                                platform.
                            </p>
                            <div>
                                <a href="#" className="btn">
                                    Get Stated
                                </a>
                            </div>
                        </div>
                        <div className="bg-community">
                            <img src="/src/assets/images/start.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Content