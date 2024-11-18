import React, { useReducer } from 'react';

const countriesAndCapitals = [
  { country: "India", capital: "Delhi", id: 1 },
  { country: "England", capital: "London", id: 2 },
  { country: "Bangladesh", capital: "Dhaka", id: 3 },
  { country: "USA", capital: "Washington, D.C.", id: 4 },
  { country: "Pakistan", capital: "Islamabad", id: 5 },
];

const initialState = {
  capital: "",
};

const reducerFn = (state, action) => {
  if (action.type === "COUNTRY_SELECT") {
    return { ...state, capital: action.payload };
  } else {
    return state;
  }
};

export default function CountryCapital() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleChange = (e) => {
    const selectedId = parseInt(e.target.value);
    
    const selectedCountry = countriesAndCapitals.find(
      (country) => country.id === selectedId
    );
    if (selectedCountry) {
      dispatch({ type: "COUNTRY_SELECT", payload: selectedCountry.capital });
    }
  };

  return (
    <>
      <div>
        <h1>Select a Country to Show Its Capital</h1>

        <label htmlFor="country-select">Choose a country:</label>
        <select id="country-select" onChange={handleChange}>
          <option value="">--Select a Country--</option>
          {countriesAndCapitals.map((country) => (
            <option key={country.id} value={country.id}>
              {country.country}
            </option>
          ))}
        </select>

        <p>Capital: {state.capital || 'Please select a country'}</p>
      </div>
    </>
  );
}
