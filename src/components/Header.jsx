import React from 'react'
import SideBar from './SideBar'
import { IoPersonCircle, IoSearchOutline } from 'react-icons/io5'
import './styles/Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>MovieFlix</h3>
            </div>
            <div className="menu desktop">
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Filmes</li>
                        <li>Minha Lista</li>
                        <li style={{ paddingLeft: 60 }}><i><IoPersonCircle /> </i></li>
                        <li><i><IoSearchOutline /> </i></li>
                    </ul>

                </nav>
            </div>
            <div className="menu mobile">
                <SideBar />
            </div>


        </header>
    )

}
export default Header;