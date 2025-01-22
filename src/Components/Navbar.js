import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import classNames from 'classnames';
import pdf from '../Components/Resume.pdf';

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarBlur(window.scrollY >= 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={classNames('Navbar', { blur: navbarBlur })}>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>Portfolio</h1>
            <div className='Hamburger' onClick={toggleMenu}>
                <span className={classNames('bar', { barOne: menuOpen })}></span>
                <span className={classNames('bar', { barTwo: menuOpen })}></span>
                <span className={classNames('bar', { barThree: menuOpen })}></span>
            </div>
            <ul className={classNames('NavbarLinks', { showNavbar: menuOpen })}>
                <li onClick={closeMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={closeMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={closeMenu}><Link to="/Project"><BsCodeSlash /> Project</Link></li>
                <li onClick={closeMenu}>
                    <a href={pdf} download="Muhammad Asif"><CgFileDocument /> Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
