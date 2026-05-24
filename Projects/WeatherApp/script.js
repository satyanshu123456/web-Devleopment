const API_KEY = "44853336a00a3932b1ca67039556ec33";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  console.log({ Lattitude, Longitude });  
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`;

  const respose = await fetch(GEO_LOC_API);
  const data = await Response.json();

  conmsole.log(data);

  const Lattitude = data[0].lat;
  const Longitude = data[0].lat;

  return { Lattitude, Longitude };
}
