import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const MovieRating = ({ rating }) => {
    return (
        <div className='movie__info--ratings'>
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => <FontAwesomeIcon icon ={faStar} key={index} />)
            }
            {
                !Number.isInteger(rating) && <FontAwesomeIcon icon={faStarHalfAlt} />
            }
            {
                new Array(Math.floor(5 - rating)).fill(0).map((_, index) => <FontAwesomeIcon icon={farStar} key={index} />)
            }
        </div>
    );
}

export default MovieRating;
