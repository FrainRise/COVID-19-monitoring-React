import React from 'react';

import { Cards, Chart, CountryPicker, Navbar, Introduction, StatTitle } from './';
import styles from './MainPage.module.css'
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
        <div className={styles.container}>
          <Navbar />
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
