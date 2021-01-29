import React from 'react'
import './styles/Header.css'

const Header = () => {
    return (
        <header>
                <div className="logo">
                    <h3>MovieFlix</h3>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Séries</li>
                            <li>Filmes</li>
                            <li>Bombando</li>
                            <li>Minha Lista</li>
                        </ul>
                    </nav>
                </div>
                
        </header>
    )
}
export default Header;