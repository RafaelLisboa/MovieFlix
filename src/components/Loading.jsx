import React from 'react'
import './styles/Loading.css'
import load from '../assets/loading.gif'

const Loading = () => {
    return (
        <div className="loading">
            <img src={load} alt="Loading content of movies gif" />
        </div>
    )
}


export default Loading;