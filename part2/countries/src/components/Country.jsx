import { useState } from "react"

const Country = ({country, disabled}) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleDisabled = () => {
    setIsDisabled(!isDisabled);
  }
  return (
    <>
      <p>{country.name.common}</p>
      <button onClick={handleDisabled}>Show</button>
      {!isDisabled ? (
        <div>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
  
        <ul>
          {Object.values(country.languages).map((v) => <li key={v}>{v}</li>)}
        </ul>
  
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    ) : null}
    </>
  )
}

export default Country