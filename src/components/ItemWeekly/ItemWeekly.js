import Sun_icon from '../../images/cloud.png';
import './ItemWeekly.css';

export default function ItemWeekly() {
  return (
    <div className='ItemWeekly'>
      <h1 className='ItemWeekly__day'>Today</h1>
      <div className='ItemWeekly__icon-container'>
        <img className='ItemWeekly__icon' src={Sun_icon} alt='weather icon' />
        <span className='ItemWeekly__icon-description'>Sunny</span>
      </div>
      <div>
        <span className='ItemWeekly__tempreture'>36</span>
        <span className='ItemWeekly__tempreture'> /22</span>
      </div>
    </div>
  );
}
