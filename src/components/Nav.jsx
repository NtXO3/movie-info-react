import React, { useContext, useState } from 'react';
import Logo from '../Assets/CineData Logo.png'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

const Nav = () => {
    const { setSearch } = useContext(AppContext)
    const mobileMenu = document.querySelector('.btn__menu')
    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        if(!document.body.classList.contains('menu-open')) {
            document.body.classList += ' menu-open'
            setMenuOpen(true)
        } else {
            document.body.classList.remove('menu-open')
            setMenuOpen(false)
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
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className='fa-bars'/>
                </button>
            </div>
            <div className="menu__backdrop">
                <ul className="mobile__links">
                    <li className="mobile__link">
                        <Link to="/" className="mobile__link--anchor" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="mobile__link">
                        <Link to="/search" className="mobile__link--anchor" onClick={toggleMenu}>Discover Movies</Link>
                    </li>
                    <li className="mobile__link">
                        <a className="mobile__link--anchor no-cursor" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>                        
            </div>
        </nav>
    );
}

export default Nav;
