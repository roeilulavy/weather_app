import { useEffect, useState } from 'react';
import {getImage} from '../../utils/getImage';
import Api from '../../utils/Api';
import {currentWeather} from '../../utils/currentWeather';
import './ItemFavoriets.css';

export default function ItemFavoriets({ isMetric, data, handleRemovePlace }) {

  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    setPlaceData([]);
  }, []);

  useEffect(() => {
    async function getPlaceData() {
      const getData = Api.getCurrentWeather(data.Key);

      if(getData) {
        setPlaceData(getData[0]);
      }

      setPlaceData(currentWeather[0]);
      console.log(getData[0]);
    };

    getPlaceData();
  }, [data.Key]);

  const handleDelete = (keyCode) => {
    handleRemovePlace(keyCode);
  }

  return (
    <div className='ItemFavoriets'>
      {placeData && <>
        <div className='ItemFavoriets-container'>
          <h1 className='ItemFavoriets__title'>{data.CityName}</h1>
          <h2 className='ItemFavoriets__tempreture'>
            {/* {isMetric ? `${placeData.Temperature.Metric.Value}°` : `${placeData.Temperature.Imperial.Value}F`} */}
          </h2>
          <img className='ItemFavoriets__icon' src={getImage(placeData.WeatherIcon)} alt='wheather icon'/>
          <h3 className='ItemFavoriets__icon-description'>{placeData.WeatherText}</h3>
        </div>
        <button className='ItemFavoriets__button' onClick={() => handleDelete(data.Key)}>REMOVE</button>
      </>}
    </div>
  );
}
