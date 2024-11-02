import React from 'react'

function Yeni(props) {
    const { productName, price } = props
    return (
        <>
            <div>Ürün Bilgileri</div>
            <div>İsim: {productName}</div>
            <div>Fiyat:{price}</div>
        </>

    )
}

export default Yeni