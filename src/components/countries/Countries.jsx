// import React from 'react'; 

import { use } from "react";
import Country from "../country/Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div className="countriesContainer">
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;