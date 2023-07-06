import React from 'react'
import { Link } from 'react-router-dom'
import CategoryAdmin from '../../page/Frontend/Categorys'
const Aside = () => {
    return (
        <div className="col-md-2 ">
            <aside className="">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Products
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <ul className="m-0 p-0">
                                    <li className="my-3 "><Link to={'product'} className="fs-5" >All product</Link></li>
                                    <li className="my-3 "><a className="fs-5" >Create</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                categorys
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <ul className="m-0 p-0">
                                    <li className="my-3 "><Link to={'category'} className="fs-5"  >All category</Link></li>
                                    <li className="my-3 "><a className="fs-5"  >Create</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <a   className="p-3">Logout</a>
                    </div>
                </div>
            </aside>
        </div>

    )
}

export default Aside
