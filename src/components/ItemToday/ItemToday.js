import Sun from '../../images/sun.png';
import './ItemToday.css';

export default function ItemToday({data}) {

  console.log(data);

  return (
    <div className='ItemToday'>
      <h1 className='ItemToday__time'>6:00 AM</h1>
      <img className='ItemToday__icon' src={Sun} alt='whaether icon'/>
      <h2 className='ItemToday__tempreture'>25°</h2>
    </div>
  );
}
