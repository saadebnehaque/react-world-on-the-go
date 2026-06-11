// import React from 'react'; 

import { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        const countryName = country.name.common;
        const isAlreadyVisited = visitedCountries.includes(countryName);
        const newVisitedCountries = isAlreadyVisited ? visitedCountries.filter(name => name !== countryName) : [...visitedCountries, countryName];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',alignItems:'center' }}>
            <div>
                <h2>Total Countries: {countries.length}</h2>
                <h2>Visited Countries: {visitedCountries.length}</h2>
            </div>
            <div style={{ border: '1px solid red', padding: '10px', borderRadius: '10px' ,width:'80%'}}>
                <h3>Visited Countries Name</h3>
                {/* <p>{visitedCountries.join(', ')}</p> */}
                <ol>{visitedCountries.map(name=><li>{name}</li>)}</ol>
            </div>
            <div className="countriesContainer">
                {
                    countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} country={country} key={country.cca3.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;