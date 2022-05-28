import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../App';

const SearchBar = () => {
    const { search, setSearch, getMovies, setSearchText, setIsLoading } = useContext(AppContext)

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        getMovies()
        setSearchText(search)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="movie__header--content">
                    <h1 className="movie__header--title">Browse For Movie Data</h1>
                    <form className="input__wrapper" onSubmit={handleSubmit}>
                        <input className="search__input movies__input" type="text" placeholder="Search for movies..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                        <button type="submit" className="search__icon"><FontAwesomeIcon className='fa-search' icon={faSearch} /></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
