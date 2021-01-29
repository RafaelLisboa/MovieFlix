import React from 'react'
import './styles/ContentRow.css'

function ContentRow(props) {
    return (
        <div className="row">
            <h2>{props.gener}</h2>
            <div className="row__line">
                <div style={{width:props.results.length*206}} className="row__images">
                    {props.results.map(element => {
                        return <img key={element.id} src={`https://image.tmdb.org/t/p/w200/${element.poster_path}`} alt=""/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContentRow;