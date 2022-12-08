const BASE_URL = "https://dataservice.accuweather.com";
const API_KEY = "BXavEULkerbqAJPASxxwAgzVsVTiwuqt";

const AutoComplete_URL = "locations/v1/cities/autocomplete";
const GeoSearch_URL = "/locations/v1/cities/geoposition/search";
const CitySearch_URL = "locations/v1/cities/search";
const CurrentWeathr_URL = "currentconditions/v1";
const HourlyForecasts_URL = "forecasts/v1/hourly/12hour";
const FutureForecasts_URL = "forecasts/v1/daily/5day";

class NewsApi {
  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Something went wrong:  ${response.status}`);
  }

  async getAutoComplete(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${AutoComplete_URL}?apikey=${API_KEY}&q=${searchKeyword}`
    );

    return this._checkResponse(response);
  }

  async getGeoSearch(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${GeoSearch_URL}?apikey=${API_KEY}&q=${searchKeyword}`
    );

    return this._checkResponse(response);
  }

  async getCitySearch(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${CitySearch_URL}?apikey=${API_KEY}&q=${searchKeyword}&details=false`
    );

    return this._checkResponse(response);
  }

  async getCurrentWeather(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${CurrentWeathr_URL}/${searchKeyword}?apikey=${API_KEY}&details=true`
    );

    return this._checkResponse(response);
  }

  async getHourlyForecastsInCelsius(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${HourlyForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&metric=true`
    );

    return this._checkResponse(response);
  }

  async getHourlyForecastsInFahrenheit(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${HourlyForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&metric=false`
    );

    return this._checkResponse(response);
  }

  async getFutureForecastsInCelsius(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${FutureForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&details=false&metric=true`
    );

    return this._checkResponse(response);
  }

  async getFutureForecastsInFahrenheit(searchKeyword) {
    const response = await fetch(
      `${this.baseUrl}/${FutureForecasts_URL}/${searchKeyword}?apikey=${API_KEY}&details=false&metric=false`
    );

    return this._checkResponse(response);
  }
}

export default new NewsApi(BASE_URL, API_KEY);
