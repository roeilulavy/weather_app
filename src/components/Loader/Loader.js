import './Loader.css'

export default function Loader() {
  return (
    <div className='Loader'>
      <i className="Loader__spinner" />
      <p className="Loader__title">Searching for forecast...</p>
    </div>
  );
}