import React, { useContext } from 'react';
import Logo from '../Assets/CineData Logo.png'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Nav = () => {
    const { setSearch } = useContext(AppContext)
    const mobileMenu = document.querySelector('.btn__menu')

    function toggleMenu() {
        if(!document.body.classList.contains('menu-open')) {
            document.body.classList += ' menu-open'
            mobileMenu.innerHTML = `<i class="fas fa-times"></i>`
        } else {
            document.body.classList.remove('menu-open')
            mobileMenu.innerHTML = `<i class="fas fa-bars"></i>`
        }
    }

    return (
        <nav>
            <div className="nav__container">
                <img className="nav__logo logo__white" src={Logo} alt=""/>
                <ul className="nav__links">
                    <li><Link to="/" className="nav__link nav__link--white link__hover-effect link__hover-effect--white">Home</Link></li>
                    <li><Link to="/search" className="nav__link nav__link--white link__hover-effect link__hover-effect--white">Discover Movies</Link></li>
                    <li><a className="nav__link--primary no-cursor">Contact</a></li>
                </ul>
                <button className="btn__menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="menu__backdrop">
                <ul className="mobile__links">
                    <li className="mobile__link">
                        <a href="./index.html" className="mobile__link--anchor" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="mobile__link">
                        <a href="#" className="mobile__link--anchor no-cursor" onClick={toggleMenu}>Discover Movies</a>
                    </li>
                    <li className="mobile__link">
                        <a href="#" className="mobile__link--anchor no-cursor" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>                        
            </div>
        </nav>
    );
}

export default Nav;
