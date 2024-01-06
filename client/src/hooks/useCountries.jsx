import countries from "world-countries"

const formattedCountries = countries.map((counttry)=> ({
    value: counttry.name.common,
    label: `${counttry.name.common} ${counttry.flag}`,
    latlng: counttry.latlng,
    region: counttry.region
}))

const useCountries = () => {
    const getAll = () => formattedCountries;
    return {getAll}
}

export default useCountries