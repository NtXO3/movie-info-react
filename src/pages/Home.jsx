import React from 'react';
import Nav from '../components/Nav';
import SearchBarHome from '../components/SearchBarHome';

const Home = () => {
    return (
        <header id="home__header">
            <section id="home__landing">
                <Nav />
                <SearchBarHome />
            </section>
        </header>
    );
}

export default Home;
