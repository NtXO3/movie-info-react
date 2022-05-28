import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/Nav';
import MovieRating from '../components/MovieRating';

const MovieInfo = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [rating, setRating] = useState(0)

    async function getMovieInfo() {
        const { data } = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a1d98b4f`)
        setMovie(data)
        console.log(data)
    }

    function getMovieRatings() {
        let ratingNum = +movie.imdbRating / 2
        setRating(ratingNum)
    }

    useEffect(() => {
        getMovieInfo()
        //getMovieRatings()
    }, [id])

    useEffect(() => {
        let ratingNum = +movie.imdbRating / 2
        setRating(ratingNum)
    }, [movie])

    return (
        <>
            <Nav />
            <main id="movie__info--body">
                <div className="container">
                    <div className="row">
                        <div className='movie__info--top'>
                            <Link to='/search' className='movie__top--link'><FontAwesomeIcon icon={faArrowLeft} className='fa-arrow' /><h1>Go Back</h1></Link>
                        </div>
                        <div className="movie__info--wrapper">
                            <img src={movie?.Poster} alt="" className="movie__info--img" />
                            <div className="movie__info--description">
                                <h1 className="movie__info--title">{movie?.Title}</h1>
                                <div className="movie__info--rating">
                                    {
                                        rating > 0 ?
                                        <MovieRating rating={rating} />      
                                        :
                                        ''                                  
                                    }
                                    <span className="rating__text">Rated {movie.imdbRating} / 10</span>
                                </div>
                                <h3 className="movie__info--sub-title">Released: {movie.Released}</h3>
                                <h3 className="movie__info--sub-title">Genres: {movie.Genre}</h3>
                                <h3 className="movie__info--sub-title">Duration: {movie.Runtime}</h3>
                                <h3 className="movie__info--sub-title">Summary: </h3>
                                <p className="movie__info--summary">{movie.Plot}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MovieInfo;
