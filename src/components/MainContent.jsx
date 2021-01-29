import React from 'react'
import './styles/MainContent.css'

const MainContent = (props) => {

    return (
        <>
            <div className="background-image" >
                <div className="content-details">
                    <h2 className="title">{props.main.original_title || props.main.name}</h2>
                </div>
                <div className="layer"></div>
                <img src={`https://image.tmdb.org/t/p/original${props.main.backdrop_path}`} alt="" />
            </div>
        </>
    )
}

export default MainContent;