function Box1() {
  function redirectDashboard(event: any){
    window.location.href = "/dashboard"
  }
  return (
    <div className="box-1">
      <div className="box-1-1">
        <p className="box-1-1-text">IAQ Score</p>
        <p className="box-1-2-text">77 %</p>
      </div>
      <div className="box-1-2">
        <div className="box-1-2-1">
          <img src="/photos/thermometer.png" className="param-img" alt="" />
          <p className="param-text">Temperature</p>
          <p className="param-text-value">22 C</p>
        </div>
        <div className="box-1-2-2">
          <img src="/photos/co2-cloud.png" className="param-img" alt="" />
          <p className="param-text">CO2</p>
          <p className="param-text-value">800 PPM</p>
        </div>
        <div className="box-1-2-3">
          <img src="/photos/humidity.png" className="param-img" alt="" />
          <p className="param-text">Humidity</p>
          <p className="param-text-value">70 %</p>
        </div>
        <div className="box-1-2-4">
          <img src="/photos/air-quality.png" className="param-img" alt="" />
          <p className="param-text">PM2_5</p>
          <p className="param-text-value">25 PPM</p>
        </div>
        <div className="box-1-2-5">
          <img src="/photos/particle.png" className="param-img" alt="" />
          <p className="param-text">PM10</p>
          <p className="param-text-value">10 PPM</p>
        </div>
        <div className="box-1-2-6">
          <img src="/photos/bonding.png" className="param-img" alt="" />
          <p className="param-text">TVOC</p>
          <p className="param-text-value">5 PPM</p>
        </div>
      </div>
    </div>
  );
}

export default Box1;
