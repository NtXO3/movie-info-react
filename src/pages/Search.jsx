import React from 'react';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Search = () => {
    return (
        <>    
            <header id="movies__header">
                <section id="movies__landing">
                    <Nav/>
                    <SearchBar />
                </section>
            </header>
            <SearchResults />
        </>
    );
}

export default Search;
