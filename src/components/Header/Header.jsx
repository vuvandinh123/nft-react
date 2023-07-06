import Cookies from 'js-cookie';
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import { DeleteCart, setCart } from '../../redux/cartSlice';
import CartHeader from './CartHeader';
import AccountHeader from './AccountHeader';

const Header = () => {

  const [isDarkMod, setIsDarkMod] = useState(false);
  const [isCart, setIsCart] = useState(true)
  const headerRef = useRef(null)
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.user)
  const { cartAr } = useSelector(state => state.cart)
   useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('sticky');
      }
      else {
        header.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])
  const handleDarkMod = () => {
    setIsDarkMod(!isDarkMod)
    const body = document.querySelector('body')
    body.classList.toggle('darkmod');
  }
  let qty = cartAr.length
  if (qty > 0) {
    Cookies.set("carts", JSON.stringify(cartAr), { expires: 1800 });
  }
  let cartCookie = Cookies.get('carts');
  if (cartCookie && isCart) {
    setIsCart(false)
    dispatch(setCart(JSON.parse(cartCookie)))
  }
  const handleClickCloseCart = (data) => {
    dispatch(DeleteCart(data))
    Cookies.remove('carts')
  }


  return (
    <div>
      <div className="blur">
        <div className="blur-item"></div>
        <div className="blur-item"></div>
        <div className="blur-item"></div>
        <div className="blur-item"></div>
        <div className="blur-item"></div>
        <div className="blur-item"></div>
      </div>
      <header>
        <div className="container">
          <div className="header" ref={headerRef}>
            <div id="nav" className="navigation animationTop">
              <span id="close" className="close">
                <i className="fa-solid fa-xmark" />
              </span>
              <div className="logo">
                <Link to={'/'}> NFT VVD<span className="color-red">.</span></Link>

              </div>
              <div className="search">
                <form action="" method="post">
                  <button>
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                  <input
                    id="s"
                    type="text"
                    defaultValue=""
                    required
                    placeholder="Search collection, item or user"
                    autoComplete="off"
                  />
                  <label htmlFor="s" className="place">
                    Search collection, item or user
                  </label>
                  <div className="search_collections">
                    <p>Recommended Collections</p>
                    <ul>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata2.png" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span> Fusionist - Bi·Mech</span>
                        </div>
                        <img src="/src/assets/images/tich.png" alt="" />
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata3.jpg" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>Alpha Prestige - Fusionist</span>
                        </div>
                        <img src="/src/assets/images/tich.png" alt="" />
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata1.png" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>Dream Girls NFT</span>
                        </div>
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata4.png" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>The CR7 NFT Collection</span>
                        </div>
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata5.jpg" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>ALPACADABRAZ</span>
                        </div>
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata6.jpg" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>WonderfulDay Tiger NFT</span>
                        </div>
                      </li>
                      <li>
                        <div className="search-collec-img">
                          <img src="/src/assets/images/avata7.png" alt="" />
                        </div>
                        <div className="search-collec-name">
                          <span>TUD NFT</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="login-mb">
                <div>
                  <a href="#">Login</a>
                </div>
                <div>
                  <a href="#">Register</a>
                </div>
              </div>
              <div className="menu">
                <ul className="menu-list">
                  <li>
                    <NavLink to={'/products'} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-danger" : ""
                    }>Product</NavLink>
                  </li>
                  <li>
                    <a href="#">Create</a>
                  </li>
                  <li>
                    <a href="#">Page</a>
                  </li>
                </ul>
              </div>
              <div className="user p-4">
                <AccountHeader />
              </div>
              <div className="cart-header" qty={qty}>
                <div><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i></Link>
                  <div className='position-absolute cart-dropdow py-4 px-3' >
                    <ul className='p-0'>
                      {cartAr?.map((e) => (
                        <CartHeader key={e.id} id={e.id} name={e.name} image={e.image} price={e.price} qty={e.qty} handleClickCloseCart={handleClickCloseCart} />
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <label className="switch">
                <input id="darkmod" type="checkbox" onChange={handleDarkMod} />
                <i className={`fa-solid ${isDarkMod ? 'fa-moon' : 'fa-sun'}`} />
              </label>
            </div>
            <div className="bars-mb">
              <div className="logo">
                NFT VVD <span className="color-red">.</span>
              </div>
              <div className="bars-mb-right">
                <div className="search-mb">
                  <i id="search" className="fa-solid fa-magnifying-glass" />
                  <form
                    action=""
                    id="input-search"
                    className="form-search-mb"
                    method="post"
                  >
                    <div className="input-search-mb">
                      <i className="fa-solid fa-chevron-left close-search-mb" />
                      <input type="text" required="" defaultValue="" />
                      <label htmlFor="s" className="place">
                        Search collection, item or user
                      </label>
                      <button>
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </div>
                    <div className="search_collections">
                      <p>
                        Recommended Collections{" "}
                        <img src="/src/assets/images/lua.png" alt="" />
                      </p>
                      <ul>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata2.png" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span> Fusionist - Bi·Mech</span>
                          </div>
                          <img src="/src/assets/images/tich.png" alt="" />
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata3.jpg" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>Alpha Prestige - Fusionist</span>
                          </div>
                          <img src="/src/assets/images/tich.png" alt="" />
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata1.png" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>Dream Girls NFT</span>
                          </div>
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata4.png" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>The CR7 NFT Collection</span>
                          </div>
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata5.jpg" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>ALPACADABRAZ</span>
                          </div>
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata6.jpg" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>WonderfulDay Tiger NFT</span>
                          </div>
                        </li>
                        <li>
                          <div className="search-collec-img">
                            <img src="/src/assets/images/avata7.png" alt="" />
                          </div>
                          <div className="search-collec-name">
                            <span>TUD NFT</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
                <button id="bars">
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header