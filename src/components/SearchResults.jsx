import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';
import MovieResult from './MovieResult';
import NoResults from './NoResults';
import SkeletonMovie from './SkeletonMovie';

const SearchResults = () => {
    const { search, movies, searchText, isLoading, getMovies, setMovies } = useContext(AppContext)

    function filterMovies(e) {
        console.log(e.target.value)
        const { value } = e.target
        if (value === 'NEW_TO_OLD') {
            setMovies(movies.slice().sort((a, b) => b.Year - a.Year))
        }
        if (value === 'OLD_TO_NEW') {
            setMovies(movies.slice().sort((a, b) => a.Year - b.Year))
        }
        if (value === 'DEFAULT') {
            getMovies()
        }
    }

    useEffect(() => {
        console.log(movies)
    }, [movies])

    return (
        <main id="movies__main">
            <section id="movies__section">
                <div className="container">
                    <div className="row">
                        <div className="movies__header">
                            <div className="movies__result--wrapper">
                                <h2 className="movies__title">Search Results For:</h2>
                                <div className="movies__search--wrapper"> <h2 className="search__result">{searchText}</h2>
                                </div>
                            </div>
                            <div className="movies__filter">
                                <select id="filter" onChange={filterMovies} defaultValue='DEFAULT'>
                                    <option value="DEFAULT">Relevance</option>
                                    <option value="OLD_TO_NEW">Year, Old To New</option>
                                    <option value="NEW_TO_OLD">Year, New To Old</option>
                                </select> 
                            </div>
                        </div>
                        <div className="movies">
                            {
                                isLoading ?
                                new Array(9).fill(0).map(item => <SkeletonMovie />)
                                :
                                movies?.length > 0 ?
                                movies?.slice(0, 9).map(item => <MovieResult movie={item} />)
                                :
                                <NoResults />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default SearchResults;
