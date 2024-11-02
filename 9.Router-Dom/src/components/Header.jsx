import React from 'react'
import { Link } from 'react-router-dom'  //Tıkladığımızda adresegidebilmek için bir react-router-dom dan import ettik 

function Header() {
    return (
        <div>
            <div className='header'>
                <Link className='links' to="/">Anasayfa</Link>
                <Link className='links' to="/about">Hakkımda</Link>
                <Link className='links' to="/product">Ürünler</Link>
                <Link className='links' to="/contact">İletişim</Link>
            </div>


        </div>
    )
}

export default Header