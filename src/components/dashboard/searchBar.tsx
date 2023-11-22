function SearchBar() {
  function fullScreen(event: any) {
    window.location.href = "/dashboard-full-screen";
  }
  return (
    <form action="" className="search-area-form">
      <div className="search-area-form-title">
        <p>Search Area</p>
      </div>
      <div className="form-questions-container">
        <div className="form-part-container-1">
          <p className="form-text-question">City</p>
          <select title="city" className="search-input">
            <option value="hk">Hong Kong</option>
            <option value="sg">Singapore</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Building</p>
          <select title="building" className="search-input">
            <option value="hk">W Lux</option>
            <option value="sg">Jebsen</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Floor</p>
          <select title="floor" className="search-input">
            <option value="hk">3rd</option>
            <option value="sg">5th</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Area</p>
          <select title="area" className="search-input">
            <option value="hk">Kitchen</option>
            <option value="sg">Office</option>
          </select>
        </div>
      </div>
      <div  className="search-bar-button-group">
        <button
          onClick={(event) => {
            fullScreen(event);
          }}
          type="button"
          className="btn btn-secondary form-search-button"
        >
          Full Screen
        </button>
        <button className="btn btn-primary form-search-button search-bar-button-2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
