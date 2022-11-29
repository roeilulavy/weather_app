import './Loader.css'

export default function Loader({ cityName }) {
  return (
    <div className='Loader'>
      <i className="Loader__spinner" />
      <p className="Loader__title">Searching for {cityName} forecast...</p>
    </div>
  );
}