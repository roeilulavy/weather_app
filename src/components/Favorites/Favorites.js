import ItemFavoriets from '../ItemFavoriets/ItemFavoriets';
import './Favorites.css';

export default function Favorites({ isMetric, savedPlaces, handlePlaceClick, handleRemovePlace }) {
  return (
    <div className='Favorites'>
      <h1 className='Favorites__title'>Saved places</h1>
      {savedPlaces.length > 0 ? 
        <div className='Favorites__places-container'>
          {savedPlaces.map((place, index) => (
            <ItemFavoriets 
              key={index}
              isMetric={isMetric}
              data={place}
              handlePlaceClick={handlePlaceClick}
              handleRemovePlace={handleRemovePlace}
            />
          ))}
        </div> 
      :
        <h2 className='Favorites__subtitle'>No saved places</h2>
      }
    </div>
  );
}
