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

export default function Home() {

  const [isloading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [isMetric, setIsMetric] = useState(true);

  const [keyword, setSearchKeyword] = useState('');
  
  const [currentTempreture, setCurrentTempreture] = useState([]);
  const [nextHoursForecast, setNextHoursForecast] = useState([]);
  const [nextWeekForecast, setNextWeekForecast] = useState([]);

  useEffect(() => {
    setSearchKeyword('');
  }, []);

  async function handleSearch(keyword) {
    setSearchKeyword('');
    setSearchKeyword(keyword);
    setIsOpen(false);
    setIsLoading(true);

    setCurrentTempreture(currentWeather[0]);
    setNextHoursForecast(nextForecast);
    setNextWeekForecast(futureForecast);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 2000);

    // try {
    //   const currentWeather = await Api.getCurrentWeathr(215854);
    //   const nextForecast = await Api.getHourlyForecastsInCelsius(215854);

    //   if (currentWeather) {
    //     setCurrentTempreture(currentWeather[0]);
    //   }

    //   if (nextForecast) {
    //     setNextHoursForecast(nextForecast[0]);
    //   }

    // } catch (error) {
    //   setSearchError(true);
    //   console.log("ERROR: " + error);
    // } finally {
    //   setIsLoading(false);
    //   setIsOpen(true);
    //   console.log(currentTempreture);
    //   console.log(nextHoursForecast);
    // }
  };

  return (
    <div className='Home'>

    <Search
          onSearch={handleSearch}
        />

      {
        isloading ? <Loader /> : isOpen &&
          <div className='Home__forcast-container'>

            <div className='forcast-container'>
              <div className='forcast-container__location'>
                <span className='forcast-container__span'>
                  <h1 className='forcast-container__span-city'>Tel Aviv</h1>
                  <button className='forcast-container__favorites-button'>Add to favorites</button>
                  <h1 className='forcast-container__span-degrees'>
                    {isMetric ? `${currentTempreture.Temperature.Metric.Value}°` : `${currentTempreture.Temperature.Imperial.Value}F`}
                  </h1>
                </span>
                <img className='forcast-container__image' src={getImage(currentTempreture.WeatherIcon)} alt='s' />
              </div>

              {nextHoursForecast && 
                <div className='forcast-container__today'>
                  <h2 className='forcast-container__title'>TODAY'S FORECAST</h2>
                  <div className='forcast-container__today-forecast'>
                    <ItemToday 
                      data={nextHoursForecast}
                    />
                  </div>
                </div>
              }

              <div className='forcast-container__air-conditions'>
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
              </div>
            </div>
            
            {nextWeekForecast && 
              <div className='forcast-container__weekly'>
                <h2 className='forcast-container__weekly-title'>WEEKLY FORECAST</h2>
                <div className='forcast-container__weekly-forecast'>
                  <ItemWeekly 
                    data={nextWeekForecast}
                  />
                </div>
              </div>
            }

          </div>
      }
    </div>
  );
}
