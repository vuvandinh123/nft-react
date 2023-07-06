import React from 'react'
import { AppUrl } from '../../Api/AppUrl'
import { Link } from 'react-router-dom'

const CardCategory = (props) => {
    const {image,name,id} = props
    return (
        <div className="col">
            <div className="card card-custom p-4">
                <img height={'70%'} src={`${AppUrl.ImageUrl}${image}`} className="card-img-top" alt="..." />
                <div className="card-body position-relative">
                    <div className="logo-user">
                        <img src={`${AppUrl.ImageUrl}${image}`} className="" alt="..." />

                    </div>
                    <h2 className="text-center mt-5"><Link to={`/category/${id}`}> {name}</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default CardCategory
