const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const allCountries = document.getElementById('all-countries');
    countries.forEach(country => {
        console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3> name: ${country.name.common} </h3>
            <h4> Capital: ${country.capital ? country.capital[0] : 'No capital'} </h4>
            <button onclick="loadCountryDetails('${country.cca2}')"> Details</button>
        
        `;
        allCountries.appendChild(countryDiv);
    })

}

const loadCountryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))
}

const showCountryDetail = country => {
    console.log(country.name)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <img src="${country.flags.png}">
    
    `;
}
loadCountries();