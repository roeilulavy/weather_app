import ItemFavoriets from '../ItemFavoriets/ItemFavoriets';
import './Favorites.css';

export default function Favorites({ savedPlaces, handleRemovePlace }) {
  return (
    <div className='Favorites'>
      <h1 className='Favorites__title'>Saved places</h1>
      <div className='Favorites__places-container'>
        <ItemFavoriets />
        <ItemFavoriets />
        <ItemFavoriets />
        <ItemFavoriets />
        <ItemFavoriets />
        <ItemFavoriets />
        <ItemFavoriets />
      </div>
    </div>
  );
}
