import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products.json'
import Products from '../components/Products'


function ProductDetails() {
    // const params = useParams()
    // console.log(params)
    const { id } = useParams()
    return (
        <div>
            <h1>Ürün Detayları</h1>
            <hr />
            {
                products && products.map((product) => {
                    if (product.id == id) {
                        return <Products key={id} product={product} />
                    }
                })
            }
        </div>
    )
}

export default ProductDetails