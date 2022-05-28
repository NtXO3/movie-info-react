import React from 'react';

const SkeletonMovie = () => {
    return (
        <div class="movie movie__skeleton">
            <div class="movie__poster--skeleton"></div>
            <div class="movie__data">
                <h3 class="movie__title--skeleton"></h3>
                <h5 class="movie__year--skeleton"></h5>
                <h5 class="movie__year--skeleton"></h5>
            </div>
        </div>
    );
}

export default SkeletonMovie;
