import React from 'react'
import './style.css'



type Props = {
    Title: string;
    Year: string;
    Poster: string;
  };
  
const Movie:React.FC<Props> = ({Title,Poster,Year}) => {
    return (
        <div className="movie">
            <h2>{Title}</h2>
            <img src={Poster} alt=""/>
            <h3>{Year}</h3>
        </div>
    )
}

export default Movie
