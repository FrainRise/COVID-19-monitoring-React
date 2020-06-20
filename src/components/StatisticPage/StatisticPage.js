import React from 'react'

import './StatisticPage.css'
import './responsive-stat.css'

import { Cards, Chart, CountryPicker, StatTitle } from '.'
import { fetchData } from '../../api'


export default class StatisticPage extends React.Component {
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
            <div className="container-covid">
                <StatTitle />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
