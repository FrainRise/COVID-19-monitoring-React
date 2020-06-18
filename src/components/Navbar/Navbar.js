import React from 'react'
//import { FaAlignLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import  './Navbar.css'
import './responsive-navbar.css'

export default class Navbar extends React.Component {
    state = {
        toggle: false
    }

    toggleBtn = () =>{
        this.setState({ toggle: !this.state.toggle })
    }

    componentDidMount() {
        const header = document.getElementById('customHeader');
        const sticky = header.offsetTop;
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
        return (
            <div className='navBar' id="customHeader">
                {/*<button onClick={this.toggleBtn} className='navBtn'>
                    <FaAlignLeft />
                </button> */}
                <div className={this.state.toggle ? 'button-container clicked' : 'button-container '} onClick={this.toggleBtn}>
                    <div className="first-bar"></div>
                    <div className="second-bar"></div>
                    <div className="third-bar"></div>
                </div>
                <ul className={this.state.toggle ? 
                    'nav-links show-nav'
                    : 'nav-links hide-nav-link'
                    }
                >
                    <Link to='/'>
                        <li> 
                            <h2 className="link link--kukuri" data-letters="Home">Home</h2>
                        </li>
                    </Link>
                    <Link to='/about-project'>
                        <li> 
                            <h2 className="link link--kukuri" data-letters="About Project">About Project</h2> 
                        </li>
                    </Link>
                    <Link to='/contact-us'>
                        <li> 
                            <h2  className="link link--kukuri" data-letters="Contact Us">Contact Us</h2>
                        </li>
                    </Link>                    
                </ul>
            </div>
        )
    }
}
