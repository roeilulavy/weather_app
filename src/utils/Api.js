const BASE_URL = "https://dataservice.accuweather.com";
const API_KEY = "BXavEULkerbqAJPASxxwAgzVsVTiwuqt";

const GeoSearch_URL = "/locations/v1/cities/geoposition/search";
const AutoComplete_URL = "locations/v1/cities/autocomplete";
const CitySearch_URL = "locations/v1/cities/search";
const CurrentWeathr_URL = "currentconditions/v1";
const HourlyForecasts_URL = "forecasts/v1/hourly/12hour";
const FutureForecasts_URL = "forecasts/v1/daily/5day";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }

  console.error("Error: " + response.status + " " + response.text);
  return Promise.reject(`Something went wrong:  ${response.status}`);
};

export const getGeoSearch = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${GeoSearch_URL}?apikey=${API_KEY}&q=${searchKeyword}`
  );

  return checkResponse(response);
};

export const getAutoCompleted = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${AutoComplete_URL}?apikey=${API_KEY}&q=${searchKeyword}`
  );

  return checkResponse(response);
};

export const getCitySearch = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${CitySearch_URL}?apikey=${API_KEY}&q=${searchKeyword}&details=false`
  );

  return checkResponse(response);
};

export const getCurrentWeather = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${CurrentWeathr_URL}/${searchKeyword}?apikey=${API_KEY}&details=true`
  );

  return checkResponse(response);
};

export const getHourlyForecastsInCelsius = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${HourlyForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&metric=true`
  );

  return checkResponse(response);
};

export const getHourlyForecastsInFahrenheit = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${HourlyForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&metric=false`
  );

  return checkResponse(response);
};

export const getFutureForecastsInCelsius = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${FutureForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&details=false&metric=true`
  );

  return checkResponse(response);
};

export const getFutureForecastsInFahrenheit = async (searchKeyword) => {
  const response = await fetch(
    `${BASE_URL}/${FutureForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&details=false&metric=false`
  );

  return checkResponse(response);
};
