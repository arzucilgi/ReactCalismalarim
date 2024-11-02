import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";



function Header() {

    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        const root = document.getElementById('root')
        setTheme(!theme)

        if (theme) {
            root.style.backgroundColor = 'black'
            root.style.color = '#fff'
        }
        else {
            root.style.backgroundColor = '#fff'
            root.style.color = 'black'
        }

    }
    return (
        <div>
            <div className='header-div'>
                <div className='flex-row'>
                    <img className='logo' src="./src/images/logo.jpg" />
                    <p className='logo-text'>Arzu A.Ş</p>
                </div>
                <div className='flex-row'>
                    <input className='input' type="text" placeholder='Bir şeyler ara' />
                    <div className='icons'>
                        {
                            theme ? <FaMoon onClick={changeTheme} /> : <MdOutlineWbSunny onClick={changeTheme} />
                        }



                        <CiShoppingBasket />

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header