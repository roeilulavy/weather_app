import "./ItemToday.css";

export default function ItemToday({ dataInC, dataInF, isMetric }) {
  let data = isMetric ? dataInC : dataInF;

  return (
    <>
      {data.slice(0, 5).map((item, index) => (
        <div className="ItemToday" key={index}>
          <h4 className="ItemToday__time">{item.DateTime.slice(11, 16)}</h4>
          <img
            className="ItemToday__icon"
            src={require(`../../images/weather/${item.WeatherIcon}.png`)}
            alt="wheather icon"
          />
          <span className="ItemToday__tempreture">
            {item.Temperature.Value}
            {isMetric ? `°` : `f`}
          </span>
        </div>
      ))}
    </>
  );
}
