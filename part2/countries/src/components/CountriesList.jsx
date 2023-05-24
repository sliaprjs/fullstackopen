import React from 'react'

import Country from './Country';
import ListItems from './ListItems';

const CountriesList = ({country, countries}) => {
  const filteredList = countries.filter(c => c.name.common.toLowerCase().includes(country.toLowerCase()));

  if (filteredList.length > 10) {
    return (
      <p>Too many countries</p>
    )
  } 
  
  if (filteredList.length === 1) {
    return (
      <Country country={filteredList[0]}/>
    )
  }

  return (
    <ListItems filteredList={filteredList}/>
  )

}

export default CountriesList