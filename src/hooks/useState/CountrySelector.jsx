import React, { useState } from 'react';

const countriesAndCapitals = [
  { country: "India", capital: "Delhi", id: 1 },
  { country: "England", capital: "London", id: 2 },
  { country: "Bangladesh", capital: "Dhaka", id: 3 },
  { country: "USA", capital: "Washington, D.C.", id: 4 },
  { country: "Pakistan", capital: "Islamabad", id: 5 },
];

const CountrySelector=()=> {
  const [selectedCountryId, setSelectedCountryId] = useState('');


  const handleCountryChange = (e) => {
    setSelectedCountryId(e.target.value);
  };


  const selectedCountry = countriesAndCapitals.find(
    (country) => country.id.toString() === selectedCountryId
  );

  return (
    <div>
      <h1>Select a Country to Show Its Capital</h1>

      <label for="country-select">Choose a country:</label>
      <select id="country-select" value={selectedCountryId} onChange={handleCountryChange}>
        <option value="">--Select a Country--</option>
        {countriesAndCapitals.map((country) => (
          <option key={country.id} value={country.id}>
            {country.country}
          </option>
        ))}
      </select>

      <p>
       Capital: {selectedCountry ? selectedCountry.capital : 'Please select a country'}
      </p>
    </div>
  );
}

export default CountrySelector;