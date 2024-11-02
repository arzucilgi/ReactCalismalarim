import React from 'react'
import Products from '../components/Products'
import { products } from '../data/products.json'


function Product() {
    return (
        <div>
            {
                products && products.map((product) => (
                    <Products key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Product