import React from 'react'

const SelectBox = (props) => {
    const {idName,data,selected} = props

    return (
        <select  onChange={(e)=>props.handleChangeSelect(e.target.value)} className='form-select p-2 fs-5' name="" id={idName||''}>
            <option value="" disabled >colection</option>
            {data?.map(e=>{
                return (
                    <option key={e.id} selected={selected == e.id} value={e.id}>{e.attributes.categoryName}</option>
                )
            })}
        </select>
    )
}

export default SelectBox
