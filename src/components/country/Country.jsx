// import React from 'react'; 
const Country = ({ country }) => {
    return (
        <>
            <div className="country">
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
                    <h3>
                        Languages:
                        <span style={{ color: "white" }}>
                            {country.languages?.languages &&
                                Object.values(country.languages.languages).join(", ")}
                        </span>
                    </h3>
                </h3>

            </div>
        </>
    );
};

export default Country;