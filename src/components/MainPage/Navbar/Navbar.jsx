import React from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import  './Navbar.css'

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
                <button onClick={this.toggleBtn}>
                    <FaAlignLeft />
                </button>
                <ul className={this.state.toggle ? 
                    'nav-links show-nav'
                    : 'nav-links'
                    }
                >
                    <Link to='/'>
                        <li> 
                            <a href="/#" className="link link--kukuri" data-letters="Home">Home</a>
                        </li>
                    </Link>
                    <Link to='/about-project'>
                        <li> 
                            <a href="/#" className="link link--kukuri" data-letters="About Project">About Project</a> 
                        </li>
                    </Link>
                    <Link to='/contact-us'>
                        <li> 
                            <a href="/#" className="link link--kukuri" data-letters="Contact Us">Contact Us</a>
                        </li>
                    </Link>                    
                </ul>
            </div>
        )
    }
}
