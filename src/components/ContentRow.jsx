import React from 'react'
import Carousel from 'nuka-carousel';
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5';
import './styles/ContentRow.css'

function ContentRow(props) {

    return (
        <div className="row">
            <h2>{props.gener}</h2>
            <div style={{height: '280px'}} className="row__line">
                <div className="row__images mobile" style={{ width: props.results.length * 196 }}>
                    {props.results.map(element => {
                        return (
                            <a key={element.id} href={`https://www.themoviedb.org/movie/${element.id}`} target="_blank" rel="noopener noreferrer">
                                <img draggable="false" src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`} alt="" />
                            </a>
                        )
                    })}
                </div>
                <Carousel defaultControlsConfig={
                    {
                        nextButtonText: <IoArrowForwardCircleOutline />,
                        prevButtonText: <IoArrowBackCircleOutline />
                    }
                } slidesToScroll={3} slidesToShow={5} dragging={false} slideWidth="191px" className="row__images">
                    {props.results.map(element => {
                        return (
                            <a key={element.id} href={`https://www.themoviedb.org/movie/${element.id}`} target="_blank" rel="noopener noreferrer">
                                <img draggable="false" src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`} alt="" />
                            </a>

                        )
                    })}
                </Carousel>
            </div>
        </div>)
}

export default ContentRow;