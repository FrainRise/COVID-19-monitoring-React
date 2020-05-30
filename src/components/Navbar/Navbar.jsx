import React from 'react'
import {ReactNavbar} from 'react-responsive-animate-navbar'
import virusIcon from '../../images/virus.png'

import  './Navbar.css'

class Navbar extends React.Component {

    render(){
        return (
            <div className='container'>
                <ReactNavbar 
                    color='rgba(255, 0, 0, 0.5)'
                    logo={virusIcon}
                />
            </div>
        )
    }
}

export default Navbar;