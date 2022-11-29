import Search from '../Search/Search';
import Tempreture_icon from '../../images/icons/temperature-icon.png';
import Wind_icon from '../../images/icons/wind-icon.png';
import Drop_icon from '../../images/icons/drop-icon.png';
import Sun_icon from '../../images/icons/sun-icon.png'; 
import './Home.css';
import ItemToday from '../ItemToday/ItemToday';
import ItemWeekly from '../ItemWeekly/ItemWeekly';
import Api from '../../utils/Api';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
import {getImage} from '../../utils/getImage';

import {currentWeather} from '../../utils/currentWeather';
import {nextForecast} from '../../utils/nextTwelve';
import {futureForecast} from '../../utils/futureForecast';

export default function Home({ savedPlaces, handleAddPlace, handleRemovePlace }) {

  const [isloading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [isMetric, setIsMetric] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const [keyword, setKeyword] = useState('');
  const [keyCode, setKeyCode] = useState('');
  
  const [currentTempreture, setCurrentTempreture] = useState([]);
  const [nextHoursForecast, setNextHoursForecast] = useState([]);
  const [nextWeekForecast, setNextWeekForecast] = useState([]);

  useEffect(() => {
    handleSearch('215854', 'Tel Aviv');
  }, []);

  useEffect(() => {
    const isExist = savedPlaces.some(item => keyCode === item.Key);
    
    if(isExist) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [keyCode, savedPlaces]);

  async function handleSearch(keyCode, cityName) {
    setKeyword('');
    setKeyCode('');

    setKeyword(cityName);
    setKeyCode(keyCode);
    setIsOpen(false);
    setIsLoading(true);

    setCurrentTempreture(currentWeather[0]);
    setNextHoursForecast(nextForecast);
    setNextWeekForecast(futureForecast.DailyForecasts);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 500);

    // try {
    //   const getCurrentWeather = await Api.getCurrentWeathr(keyCode);
    //   const getNextHoursForecast = await Api.getHourlyForecastsInCelsius(keyCode);
    //   const getWeeklyForecast = await Api.getFutureForecastsInCelsius(keyCode);

    //   if (getCurrentWeather) {
    //     setCurrentTempreture(getCurrentWeather[0]);
    //   }

    //   if (getNextHoursForecast) {
    //     setNextHoursForecast(getNextHoursForecast);
    //   }

    //    if (getWeeklyForecast) {
    //     setNextWeekForecast(getWeeklyForecast.DailyForecasts);
    //   }

    // } catch (error) {
    //   setSearchError(true);
    //   console.log("ERROR: " + error);
    // } finally {
    //   setIsLoading(false);
    //   setIsOpen(true);
    // }
  };

  const handleSavePlace = (keyCode, cityName) => {
    handleAddPlace({Key: keyCode, CityName: cityName});
    setIsSaved(true);
  };

  const handleDeletePlace = (keyCode) => {
    handleRemovePlace(keyCode);
    setIsSaved(false);
  };

  return (
    <div className='Home'>
      <Search onSearch={handleSearch} />
      {
        isloading ? <Loader cityName={keyword} /> : isOpen &&
          <div className='Home__forcast-container'>

            <div className='forcast-container'>
              <section className='forcast-container__location'>
                <div className='forcast-container__span-container'>
                  <div className='forcast-container__span'>
                    <h1 className='forcast-container__span-city'>{keyword}</h1>
                    <h1 className='forcast-container__span-degrees'>
                      {isMetric ? `${currentTempreture.Temperature.Metric.Value}°` : `${currentTempreture.Temperature.Imperial.Value}F`}
                    </h1>
                    <div className='forcast-container__span-utils'>
                      {isSaved ? 
                        <button className='forcast-container__favorites-button_active' onClick={() => handleDeletePlace(keyCode)}>Remove from favorites</button>
                        :
                        <button className='forcast-container__favorites-button' onClick={() => handleSavePlace(keyCode, keyword)}>Add to favorites</button>
                      }
                      <p className='forcast-container__span-utils-tempreture'>C°</p>
                      <p className='forcast-container__span-utils-tempreture'>F°</p>
                    </div>
                  </div>
                  
                </div>
                <img className='forcast-container__image' src={getImage(currentTempreture.WeatherIcon)} alt='s' />
              </section>

              <section className='forcast-container__today'>
                <h2 className='forcast-container__title'>TODAY'S FORECAST</h2>
                {nextHoursForecast.length > 0 ?
                <div className='forcast-container__today-forecast'>
                  <ItemToday 
                    data={nextHoursForecast}
                  />
                </div>
                :
                <h2 className='forcast-container__title'>No results...</h2>
                }
              </section>

              <section className='forcast-container__air-conditions'>
                <h3 className='forcast-container__title'>AIR CONDITIONS</h3>
                <div className='air-conditions__details-container'>
                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Tempreture_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <span className='air-conditions__details-title'>Real Feel</span>
                      <span className='air-conditions__details-subtitle'>
                        {isMetric ? `${currentTempreture.RealFeelTemperature.Metric.Value}°` : `${currentTempreture.RealFeelTemperature.Imperial.Value}F`}
                      </span>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Wind_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <span className='air-conditions__details-title'>Wind</span>
                      <span className='air-conditions__details-subtitle'>
                        {isMetric ? `${currentTempreture.Wind.Speed.Metric.Value} Km/h` : `${currentTempreture.Wind.speed.Imperial.Value} E`}
                      </span>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Drop_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>Humidity</h1>
                      <h2 className='air-conditions__details-subtitle'>
                        {currentTempreture.RelativeHumidity}%
                      </h2>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Sun_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>UV Index</h1>
                      <h2 className='air-conditions__details-subtitle'>
                        {currentTempreture.UVIndex}
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            <section className='forcast-container__weekly'>
              <h2 className='forcast-container__weekly-title'>WEEKLY FORECAST</h2>
              {nextWeekForecast.length > 0 ?
              <div className='forcast-container__weekly-forecast'>
                <ItemWeekly 
                  data={nextWeekForecast}
                />
              </div>
              :
              <h2 className='forcast-container__weekly-title'>No results...</h2>
              }
            </section>
            
          </div>
      }
    </div>
  );
}
