import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../utils/Api";
import { getImage } from "../../utils/getImage";
import "./ItemFavoriets.css";

export default function ItemFavoriets({
  isMetric,
  data,
  handleRemovePlace,
  handlePlaceClick,
}) {
  const Navigate = useNavigate();

  const [placeData, setPlaceData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPlaceData() {
      try {
        const getData = await Api.getCurrentWeather(data.Key);

        if (getData) {
          setPlaceData(getData[0]);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      }
    }

    getPlaceData();
  }, [data.Key]);

  function handleItemClick(keyCode, cityName) {
    handlePlaceClick(keyCode, cityName);
    Navigate("/home");
  }

  const handleDelete = (keyCode) => {
    handleRemovePlace(keyCode);
  };

  return (
    <div className="ItemFavoriets">
      <div
        className="ItemFavoriets-container"
        onClick={() => handleItemClick(data.Key, data.CityName)}
      >
        <h2 className="ItemFavoriets__title">{data.CityName}</h2>
        {error ? (
          <p className="ItemFavoriets__error">Couldn't get temperature..</p>
        ) : placeData.length > 0 ? (
          <p className="ItemFavoriets__tempreture">Loading..</p>
        ) : (
          <>
            <p className="ItemFavoriets__tempreture">
              {placeData.Temperature
                ? isMetric
                  ? `${placeData.Temperature.Metric.Value}°`
                  : `${placeData.Temperature.Imperial.Value}F`
                : null}
            </p>
            <img
              className="ItemFavoriets__icon"
              src={getImage(placeData.WeatherIcon)}
              alt="wheather icon"
            />
            <p className="ItemFavoriets__icon-description">
              {placeData.WeatherText}
            </p>
          </>
        )}
      </div>
      <button
        className="ItemFavoriets__button"
        onClick={() => handleDelete(data.Key)}
      >
        REMOVE
      </button>
    </div>
  );
}
