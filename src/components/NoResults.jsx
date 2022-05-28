import React from 'react';
import NotFound from '../Assets/undraw__404.svg'

const NoResults = () => {
    return (
        <div className='no__results'>
            <img src={NotFound} alt="" className="no__results--img" />
            <h1 className="no__results--title">No Movies Found Matching Your Search Query</h1>
        </div>
    );
}

export default NoResults;
