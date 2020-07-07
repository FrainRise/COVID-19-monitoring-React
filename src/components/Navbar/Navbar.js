import React from 'react'
//import { FaAlignLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

import  './Navbar.css'
import './responsive-navbar.css'

export default class Navbar extends React.Component {
    state = {
        isToggled: false,
        activeId: 1
    }

    toggleBtn = () => {
        this.setState({ isToggled: !this.state.isToggled })
    }

    // addClassActive = (id) => {
    //     this.setState({ activeId: id })
    // }

    componentDidMount() {
        const header = document.getElementById('customHeader');
        const sticky = header.offsetTop;
        // Locate our scrolling to make Navbar
        const scrollCallback = window.addEventListener('scroll', () =>{
            if(window.pageYOffset > sticky){
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
        
        return () => {
            window.removeEventListener('scroll', scrollCallback)
        }
    }

    render(){
        const navLinks = [
            {id: 1, name: 'Home', route: '/home'},
            {id: 2, name: 'Covid-19', route: '/covid-stat'},
            {id: 3, name: 'About Project', route: '/about-project'},
            {id: 4, name: 'Contact Us', route: '/contact-us'}
        ];

        return (
            <div className='navBar' id="customHeader">
                <div className={this.state.isToggled ? 'button-container clicked' : 'button-container '} onClick={this.toggleBtn}>
                    <div className="first-bar"></div>
                    <div className="second-bar"></div>
                    <div className="third-bar"></div>
                </div>
                <ul className={this.state.isToggled ? 
                    'nav-links show-nav'
                    : 'nav-links hide-nav-link'
                    }
                >
                    { 
                        navLinks.map((link) => {
                            return (
                                <NavLink 
                                    key={link.id} 
                                    to={link.route}
                                    activeClassName="active" 
                                    style={{color: '#7e7e7e'}}
                                >
                                    <li /*onClick={this.addClassActive.bind(this, link.id)}*/ key={link.id} > 
                                        <h2 className="link link--lined" data-letters={link.name}>
                                            {link.name}
                                        </h2>
                                    </li>
                                </NavLink>
                            )  
                        })
                    }             
                </ul>
            </div>
        )
    }
}

// {this.state.activeId === link.id ? "link link--lined active" : "link link--lined"} 