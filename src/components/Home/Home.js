import Search from '../Search/Search';
import Sun from '../../images/sun.png';
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

export default function Home() {

  const [isloading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [keyword, setSearchKeyword] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setSearchKeyword('');
  }, []);

  useEffect(() => {
    console.log("Keyword: " + keyword);
  }, [keyword])

  async function handleSearch(keyword) {
    setSearchKeyword('');
    setSearchKeyword(keyword);
    setIsLoading(true);

    // try {
    //   const tempreture = await Api.getCityTempreture(
    //     keyword,
    //   );

    //   if (tempreture) {
        
    //   }
    // } catch (err) {
    //   setSearchError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className='Home'>

    <Search
          onSearch={handleSearch}
        />

      {
        isloading ? <Loader /> : 

          <div className='Home__forcast-container'>

            <div className='forcast-container'>
              <div className='forcast-container__location'>
                <span className='forcast-container__span'>
                  <h1 className='forcast-container__span-city'>Tel Aviv</h1>
                  <button className='forcast-container__favorites-button'>Add to favorites</button>
                  <h1 className='forcast-container__span-degrees'>38°</h1>
                </span>
                <img className='forcast-container__image' src={Sun} alt='s' />
              </div>

              <div className='forcast-container__today'>
                <h2 className='forcast-container__title'>TODAY'S FORECAST</h2>
                <div className='forcast-container__today-forecast'>
                  <ItemToday />
                  <ItemToday />
                  <ItemToday />
                  <ItemToday />
                  <ItemToday />
                </div>
              </div>

              <div className='forcast-container__air-conditions'>
                <h2 className='forcast-container__title'>AIR CONDITIONS</h2>
                <div className='air-conditions__details-container'>
                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Tempreture_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>Real Feel</h1>
                      <h2 className='air-conditions__details-subtitle'>30°</h2>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Wind_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>Wind</h1>
                      <h2 className='air-conditions__details-subtitle'>0.2 Km/h</h2>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Drop_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>Chance of rain</h1>
                      <h2 className='air-conditions__details-subtitle'>0%</h2>
                    </div>
                  </div>

                  <div className='air-conditions__details'>
                    <img className='air-conditions__details-icon' src={Sun_icon} alt='Tempreture icon' />
                    <div className='air-conditions__detail'>
                      <h1 className='air-conditions__details-title'>UV Index</h1>
                      <h2 className='air-conditions__details-subtitle'>3</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='forcast-container__weekly'>
              <h2 className='forcast-container__weekly-title'>WEEKLY FORECAST</h2>
              <div className='forcast-container__weekly-forecast'>
                <ItemWeekly />
                <ItemWeekly />
                <ItemWeekly />
                <ItemWeekly />
                <ItemWeekly />
                <ItemWeekly />
                <ItemWeekly />
              </div>
            </div>

          </div>
      }
    </div>
  );
}
