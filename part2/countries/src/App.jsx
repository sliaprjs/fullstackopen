import { useState, useEffect } from 'react'
import axios, { all } from 'axios';

import CountriesList from './components/CountriesList';

const App = () => {
  const [country, setCountry] = useState('');
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
      setAllCountries(response.data);
    })
  }, [])

  const handleCountryInput = (e) => {
    setCountry(e.target.value);
  }

  return (
    <>
      <input value={country} onChange={handleCountryInput}/>
      {country ? <CountriesList country={country} countries={allCountries}/> : null}
    </>
  )
}

export default App
