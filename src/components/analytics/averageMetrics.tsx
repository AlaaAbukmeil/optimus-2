function AverageMetrics() {
  let iaqTitles = [
    "Temperature",
    "Humidity",
    "CO2",
    "TVOC",
    "PM2_5",
    "PM10",
    "Pressure",
    "HCHO",
    "Score",
  ];
  let data: any = {
    Temperature: "22 C",
    TemperatureColor: "#95E9A7",
    Humidity: "70 %",
    HumidityColor: "#95E9A7",
    CO2: "700 PPM",
    CO2Color: "#ff9f40",
    TVOC: "10 PPM",
    TVOCColor: "#fc846533",
    PM2_5: "20 PPM",
    PM2_5Color: "#ff9f40",
    PM10: "10 PPM",
    PM10Color: "#95E9A7",
    Pressure: "1000 Ps",
    PressureColor: "#95E9A7",
    HCHO: "2 PPM",
    HCHOColor: "#fc846533",
    Score: "88 %",
    ScoreColor: "#95E9A7",
  };
  return (
    <div className="metrics-container">
      <div className="metrics-title">
        <p>Average IAQ Parameters</p>
      </div>
      <div className="metrics">
        {iaqTitles.map((title, index) => (
          <div
            className="metric-box"
            style={{ backgroundColor: `${data[title + "Color"]}` }}
          >
            <p className="metric-name">{title}</p>
            <p className="metric-value">{data[title]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AverageMetrics;
