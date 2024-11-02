import React from 'react'

function Course({ course }) {
    const { id, tittle, description, price, image, link } = course
    return (
        <div>
            <div className='course'>
                <img src={image} className='course-img' />
                <p className='course-title'>  {tittle}</p>
                <p className='course-desc'>{description}</p>
                <p className='course-price'>{price} ₺</p>
                <a href={link}>Göz at</a>
            </div>
        </div>

    )
}

export default Course