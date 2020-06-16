import React from 'react'

import './MainPage.css'
import './responsive-main.css'

import { Cards, Chart, CountryPicker, Introduction, StatTitle } from '.'
import { fetchData } from '../../api'

// import image from '../../images/image.png'

class MainPage extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({ data: fetchedData, country: country })
  }

  render(){
    const { data, country } = this.state;

    return (
        <div className="container-main">
          <Introduction />
          <StatTitle />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
    );
  }
}

export default MainPage;
