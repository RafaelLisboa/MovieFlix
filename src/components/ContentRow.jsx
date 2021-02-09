import React from 'react'
import Carousel from 'nuka-carousel';
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5';
import './styles/ContentRow.css'

function ContentRow(props) {
    return (
        <div className="row">
            <h2>{props.gener}</h2>
            <div className="row__line">
                <Carousel defaultControlsConfig={
                    {
                        nextButtonText: <IoArrowForwardCircleOutline />,
                        prevButtonText: <IoArrowBackCircleOutline />
                    }
                } slidesToScroll={3} slidesToShow={5} dragging={true} slideWidth="191px" className="row__images">
                    {props.results.map(element => {
                        return <img draggable="false" key={element.id} src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`} alt="" />
                    })}
                </Carousel>
            </div>
        </div>)
}

export default ContentRow;