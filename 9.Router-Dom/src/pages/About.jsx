import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h2>About</h2>
            <Link to="employee">Çalışanlar Hakkında </Link>
            <Link to="company">Şirket Hakkında </Link>

            <Outlet />
        </div>
        // <Outlet />: Parentezin altına yazılır ve  İç İçe Router tanımlarında kullanılır 
    )
}

export default About