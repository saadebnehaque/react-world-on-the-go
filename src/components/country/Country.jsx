import { useState } from "react";

// import React from 'react'; 
const Country = ({ country }) => {
    const [isVisited, setIsVisited] = useState(false)

    return (
        <>
            <div className={`country ${isVisited && 'visitedCountry'}`}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h1 style={{ color: 'white' }}>
                    {country.name.common}

                </h1>
                <h3>
                    Official name: <span style={{ color: 'white' }}>
                        {country.name.official}
                    </span>
                </h3>
                <h3>
                    Capital: <span style={{ color: 'white' }}>
                        {country.capital.capital}
                    </span>
                </h3>
                <h3>
                    Region: <span style={{ color: 'white' }}>
                        {country.region.region}
                    </span>

                </h3>
                <h3>
                    Languages:
                    <span style={{ color: "white" }}>
                        {country.languages?.languages &&
                            Object.values(country.languages.languages).join(", ")}
                    </span>
                </h3>
                <h3>
                    Area: <span style={{ color: "white" }}>{country.area.area > 300000 ? 'Big Country' : 'Small Country'}</span>
                </h3>
                <button onClick={() => setIsVisited(!isVisited)}>{isVisited ? 'Visited' : 'Not Visited'}</button>
            </div>
        </>
    );
};

export default Country;