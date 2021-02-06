import React, { useState } from 'react';
import { IoMenu, IoCloseSharp, IoHomeOutline, IoPlayOutline, IoListOutline } from 'react-icons/io5';
import './styles/SideBar.css';

const SideBar = () => {
    let [state, setState] = useState(['close']);
    let [icon, setIcon] = useState(['close']);

    const changeState = () => {
        if (state === 'open') {
            setState('close');
            setIcon('open');
        } else {
            setState('open');
            setIcon('close');
        }
    }

    return (
        <>
            <div className="menu-icon" onClick={() => changeState()}>
                {(icon === 'close') ? <IoCloseSharp id="isClose" /> :<IoMenu id="isOpen" /> }
            </div>
            <nav className={`nav-mobile-menu ${state}`}>
                <ul>
                    <li><i><IoHomeOutline /></i> Inicio</li>
                    <li><i><IoPlayOutline /></i> Filmes</li>
                    <li><i><IoListOutline /></i> Minha Lista</li>
                </ul>
            </nav>
        </>
    )

}

export default SideBar;