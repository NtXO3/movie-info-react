import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieResult = ({ movie }) => {
    let navigate = useNavigate()

    return (
        <div class="movie" onClick={() => navigate(`/search/${movie.imdbID}`)}>
            <img src={movie.Poster} alt="no movie img" class="movie__poster" />
            <div class="movie__data">
                <h3 class="movie__title">{movie.Title}</h3>
                <h5 class="movie__year"><b>Year:</b>&nbsp;{movie.Year}</h5>
                <h5 class="movie__year"><b>Type:</b>&nbsp;{movie.Type}</h5>
            </div>
        </div>
    );
}

export default MovieResult;
