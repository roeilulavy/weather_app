import {getImage} from '../../utils/getImage';
import './ItemWeekly.css';

export default function ItemWeekly({data}) {

  const WEEK_DAYS = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayInWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInWeek, 5).concat(WEEK_DAYS.slice(0, dayInWeek));

  return (
    <>
      {data.DailyForecasts.map((item, index) => (
        <div className='ItemWeekly' key={index}>
        <h1 className='ItemWeekly__day'>{index === 0 ? 'Today' : forecastDays[index]}</h1>
        <div className='ItemWeekly__icon-container'>
          <img className='ItemWeekly__icon' src={item.Day ? getImage(item.Day.Icon) : getImage(item.Night.Icon)} alt='weather icon' />
          <span className='ItemWeekly__icon-description'>{item.Day ? item.Day.IconPhrase : item.Night.IconPhrase}</span>
        </div>
        <div>
          <span className='ItemWeekly__tempreture'>{item.Temperature.Maximum.Value}</span>
          <span className='ItemWeekly__tempreture'>/{item.Temperature.Minimum.Value}</span>
        </div>
      </div>
      ))}
    </>
  );
}
