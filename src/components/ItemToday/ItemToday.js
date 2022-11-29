import {getImage} from '../../utils/getImage';
import './ItemToday.css';

export default function ItemToday({data, isMetric}) {
  return (
    <>
      {data.slice(0,5).map((item, index) => (
        <div className='ItemToday' key={index}>
          <h4 className='ItemToday__time'>{item.DateTime.slice(11,16)}</h4>
          <img className='ItemToday__icon' src={getImage(item.WeatherIcon)} alt='wheather icon'/>
          <span className='ItemToday__tempreture'>{item.Temperature.Value}{isMetric ? `°` : `f`}</span>
        </div>
      ))}
    </>
  );
}
