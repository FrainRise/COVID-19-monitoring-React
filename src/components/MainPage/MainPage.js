import React from 'react'

import './MainPage.css'
import './responsive-main.css'

import {  Introduction, RulesSection, SymptomsSection, AdditionalInfoSection, LinksSection } from '.'
// import image from '../../images/image.png'

class MainPage extends React.Component {

  render(){
    return (
        <div className="container-main">
          <Introduction />
          <RulesSection />
          <SymptomsSection />
          <AdditionalInfoSection />
          <LinksSection />
        </div>
    );
  }
}

export default MainPage;
