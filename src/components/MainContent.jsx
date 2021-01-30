import React from 'react'
import './styles/MainContent.css'
import {
    IoPlayCircleOutline,
    IoInformationCircleOutline
} from 'react-icons/io5';

const MainContent = (props) => {

    return (
        <>
            <div className="background-image" >
                <div className="content-details">
                    <div className="details-wrapper">
                        <h2 className="title">{props.main.original_title || props.main.name}</h2>
                        <p className="description">{}</p>
                        <button id="play">
                            <IoPlayCircleOutline /> <span>Assistir Agora</span>
                        </button>
                        <button id="more-info">
                            <IoInformationCircleOutline /> <span>Mais Informações</span>
                        </button>
                    </div>
                </div>

                <div className="layer"></div>
                <img src={`https://image.tmdb.org/t/p/original${props.main.backdrop_path}`} alt="" />
            </div>
        </>
    )
}

export default MainContent;