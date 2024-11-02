import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({ product }) {
    const { id, name, price } = product
    const navigate = useNavigate()// Bir olay olduğunda aksiyon gerçekleştiğinde belirlenen url gitmesini sağlar Yönlenririr.
    return (
        <div>
            <div>Ürün </div>
            <h4>İsim:{name}</h4>
            <h4>Fiyat:{price}</h4>
            <button onClick={() => navigate("/product-details/" + id)}>Ürün Detayı</button>
        </div>
    )
}

export default Products