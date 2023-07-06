import React, { useEffect, useState } from 'react'
import { categoryApi } from '../../Api/categoryApi'
function RenderFilter(props) {
    const handleOnchange = e =>{

        props.handleCheckboxCategory(e.target.value)
    }
    return (
        <>
            <div className='mb-3'>
                <input onChange={handleOnchange}  checked={props.selectedCategory == props.id}  className='me-3' value={props.id} type="checkbox" name="" id={props.id} />
                <label className='gray' htmlFor={props.id}>{props.name}</label>
            </div>
        </>
    )
}

const Filter = (props) => {
    const [categorys, setCategorys] = useState([])
    const [selectedCheckbox, setSelectedCheckbox] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await categoryApi.getAll();
            setCategorys(response.data.data);
        }
        fetchData()
    }, [])
    const handleOnChangeSearch = (e) => {
        props.handleChangeSearch(e.target.value)
    }
    const handleOnBlurMin = (e) => {
        props.handleBlurPrice({ min: e.target.value })
    }
    const handleOnBlurMax = (e) => {
        props.handleBlurPrice({ max: e.target.value })
    }
    const handleCheckboxChange = (e) => {
        setSelectedCheckbox(e.target.value);
        props.handleChangeQty(e.target.value)
    }
    const handleCheckboxCategory = (value) => {
        setSelectedCategory(value)
        props.handleChangeCategory(value)
    }
    return (
        <>
            <div className="col-md-3 filters py-5 my-5" >
                <div className='filter '>
                    <h1>Filters</h1>
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item transparent">
                            <h2 className="accordion-header" id="panelsStayOpen-heading0">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse0" aria-expanded="false" aria-controls="panelsStayOpen-collapse0" >
                                    Search
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse0" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading0">
                                <div className="accordion-body p-0 py-3">
                                    <input onChange={handleOnChangeSearch} type="text" placeholder='Search...' className='py-3 px-4 border border-dark' />
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item transparent">
                            <h2 className="accordion-header" id="panelsStayOpen-heading5">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5" >
                                    Categories
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse5" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading5">
                                <div className="accordion-body p-0 py-3">
                                    <div className='mb-3'>
                                        <input onChange={(e) => handleCheckboxCategory(e.target.value)} checked={selectedCategory==0}  className='me-3' value='0' type="checkbox" id='all' name="" />
                                        <label className='gray' htmlFor='all'>All</label>
                                    </div>
                                    {categorys.map((e) => (
                                        <RenderFilter key={e.id} name={e.attributes.categoryName} handleCheckboxCategory={handleCheckboxCategory} selectedCategory={selectedCategory}  id={e.id} />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="accordion-item transparent">
                            <h2 className="accordion-header" id="panelsStayOpen-heading3">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
                                    Price ($)
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse3" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading3">
                                <div className="accordion-body p-0 py-3">
                                    <div className="d-flex">
                                        <input type="number" onChange={handleOnBlurMin} className='form-control me-3 p-2 text-center fs-3 ' placeholder='Min' />
                                        <input type="number" onChange={handleOnBlurMax} className='form-control p-2 text-center fs-3' placeholder='Max' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item transparent ">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                    Status
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body p-0 py-3">
                                    <div className='mb-3'>
                                        <input className='me-3' type="checkbox" name="" id="1" />
                                        <label htmlFor="1">Buy Now</label>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='me-3' type="checkbox" name="" id="2" />
                                        <label htmlFor="2">On Auction</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item transparent">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Curation
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body p-0 py-3">
                                    <div className='mb-3'>
                                        <input className='me-3' type="checkbox" name="" id="1" />
                                        <label className='gray' htmlFor="1">Curated</label>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='me-3' type="checkbox" name="" id="2" />
                                        <label htmlFor="2">Non-Curated</label>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="accordion-item transparent">
                            <h2 className="accordion-header" id="panelsStayOpen-heading4">
                                <button className="accordion-button collapsed fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
                                    Quantity
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapse4" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading4">
                                <div className="accordion-body p-0 py-3">
                                    <div className='mb-3'>
                                        <input className='me-3' checked={selectedCheckbox === '10'}
                                            onChange={handleCheckboxChange} value={10} type="checkbox" name="" id="qty1" />
                                        <label className='gray' htmlFor="qty1">10 Products</label>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='me-3' value={20} type="checkbox" checked={selectedCheckbox === '20'}
                                            onChange={handleCheckboxChange} name="" id="qty2" />
                                        <label htmlFor="qty2">20 Products</label>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='me-3' checked={selectedCheckbox === '30'}
                                            onChange={handleCheckboxChange} value={30} type="checkbox" name="" id="qty3" />
                                        <label htmlFor="qty3">30 Products</label>
                                    </div> 
                                    <div className='mb-3'>
                                        <input className='me-3' checked={selectedCheckbox === '50'}
                                            onChange={handleCheckboxChange} value={50} type="checkbox" name="" id="qty4" />
                                        <label htmlFor="qty4">50 Products</label>
                                    </div>
                                    <div className='mb-3'>
                                        <input className='me-3' checked={selectedCheckbox === '100'}
                                            onChange={handleCheckboxChange} value={100} type="checkbox" name="" id="qty5" />
                                        <label htmlFor="qty5">100 Products</label>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Filter