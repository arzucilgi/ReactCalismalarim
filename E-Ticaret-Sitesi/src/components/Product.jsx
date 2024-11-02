import React from 'react'

function Product({ product }) {
    const { id, image, price, title } = product
    console.log(image)
    return (
        <div className='cards'>
            <img className='images' src={image} alt="" />

            <p className='another'>{title}</p>
            <h3 className='another'>{price}</h3>
        </div>
    )
}

export default Product