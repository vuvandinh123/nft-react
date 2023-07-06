import React from 'react'

import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div style={{ borderRadius:'5px',zIndex:'9999'}} className="container bg-light mb-3 ">
                <nav style={{ zIndex:'99' }} className="navbar  navbar-expand-lg py-3  ">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-1 fw-bold" href="#">ADMIN <span className='text-danger'>.</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                
            </div>
        </>
    )
}

export default Header
