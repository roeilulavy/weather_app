import Sun_icon from '../../images/sun.png';
import './ItemFavoriets.css';

export default function ItemFavoriets() {
  return (
    <div className='ItemFavoriets'>
      <div className='ItemFavoriets-container'>
        <h1 className='ItemFavoriets__title'>Tel Aviv - yaffo ggdfgdfgdfgdfgd</h1>
        <h2 className='ItemFavoriets__tempreture'>38°</h2>
        <img className='ItemFavoriets__icon' src={Sun_icon} alt='weather icon'/>
        <h3 className='ItemFavoriets__icon-description'>Sunny</h3>
      </div>
      <button className='ItemFavoriets__button'>REMOVE</button>
    </div>
  );
}
