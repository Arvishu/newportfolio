import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Navbar.css';

import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import Design from '../Design/Design.js';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';

export default function Navbar() {
    return (
        <div className='navbarContainer'>
            <div className='navbarStyle'>

                <NavLink className='navLinkStyle' activeClassName="selected" to='/home'>Home</NavLink>
                <div></div>

                <NavLink className='navLinkStyle' activeClassName="selected" to='/projets'>Projets</NavLink>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/design'>Design</NavLink>
                <NavLink className='navLinkStyle' activeClassName="selected" to='/about'>About</NavLink>
                <div></div>

                <NavLink className='navLinkStyle' activeClassName="selected" to='/contact'>Contact</NavLink>

            </div>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/home"><Home /></Route>
                <Route path="/projets"><Projects /></Route>
                <Route path='/design'><Design /></Route>
                <Route path='/about'><About /></Route>
                <Route path='/contact'><Contact /></Route>
            </Switch>
        </div>
    );
}