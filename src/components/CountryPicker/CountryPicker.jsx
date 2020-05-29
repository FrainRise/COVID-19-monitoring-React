import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountires] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchCountires(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchCountires]);
    
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )   
}

export default CountryPicker;