import React from 'react'
//import { FaAlignLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import  './Navbar.css'
import './responsive-navbar.css'

export default class Navbar extends React.Component {
    state = {
        isToggled: false,
        isActive: false,
        selectedLinkId: 1
    }

    toggleBtn = () => {
        this.setState({ isToggled: !this.state.isToggled })
    }

    addClassActive = () => {
        this.setState({ isActive: !this.state.isActive })
        console.log('acitve is', this.state.isActive )
    }

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
            {id: 1, name: 'Home', route: '/'},
            {id: 2, name: 'About Project', route: '/about-project'},
            {id: 3, name: 'Contact Us', route: '/contact-us'}
        ]
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
                    { navLinks.map((link) => {
                      return (
                        <Link 
                            key={link.id} 
                            to={link.route}
                        >
                            <li onClick={this.addClassActive}> 
                                <h2 className="link link--kukuri" data-letters={link.name}>{link.name}</h2>
                            </li>
                        </Link>
                      )  
                    })
                    }
                    {/* <Link to='/'>
                        <li> 
                            <h2 className="link link--kukuri" data-letters="Home">Home</h2>
                        </li>
                    </Link>
                   <Link to='/about-project'>
                        <li> 
                            <h2 className={this.state.isActive ? "link link--kukuri active" : "link link--kukuri"} data-letters="About Project">About Project</h2> 
                        </li>
                    </Link>
                    <Link to='/contact-us'>
                        <li> 
                            <h2  className="link link--kukuri" data-letters="Contact Us">Contact Us</h2>
                        </li>
                    </Link>    */}                
                </ul>
            </div>
        )
    }
}
