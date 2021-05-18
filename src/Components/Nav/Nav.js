import './nav.css'
import React from 'react';
import {Link} from 'react-router-dom';

const NavTitle=()=> <h1 className="NavTitle">My Portfolio</h1> ;
const Navigation=()=>{
    return(
        <nav>
            <ul className="navLinks">
                <Link to="/" className="NavLink">Home</Link>
                <Link to="/about" className="NavLink">About</Link>
                <Link to="/resume" className="NavLink">Resume</Link>
                <Link to="/skills" className="NavLink">Skills</Link>
            </ul>
        </nav>
    )
}
const Nav=()=>{
    return(
        <div className="nav">
            <NavTitle/>
            <Navigation/>
        </div>
    ) ;
}

export default Nav;
