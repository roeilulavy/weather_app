import Sun_icon from '../../images/sun.png';
import './ItemToday.css';

export default function ItemToday() {
  return (
    <div className='ItemToday'>
      <h1 className='ItemToday__time'>6:00 AM</h1>
      <img className='ItemToday__icon' src={Sun_icon} alt='whaether icon'/>
      <h2 className='ItemToday__tempreture'>25°</h2>
    </div>
  );
}
