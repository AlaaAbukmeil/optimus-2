import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import axios from "axios";

function SearchBar(props: any) {
  let [selectionRange, setSelectionRange] = useState({
    endDate: new Date(),
    startDate: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
    key: "selection",
  });
  function onChange(event: any) {
    let newRange = {
      startDate: new Date(event.selection.startDate),
      endDate: new Date(event.selection.endDate),
      key: "selection",
    };
    setSelectionRange(newRange);
  }
  async function queryData(event: any) {
    try {
      props.setData(null);
      let dataType = document.getElementById("dataType");
      let url = `${dataType}`;
      let data: any = await axios.post(url);
      props.setData(data);
    } catch (error) {}
  }
  function fullScreenRedirect(event: any, area: any) {
    window.location.href = `/analytics-full-screen?area=${area}`;
  }
  return (
    <form action="" className="search-area-form search-area-data-form">
      <div className="search-area-form-title">
        <p>Search Area</p>
      </div>
      <div className="form-questions-container">
        <div className="form-part-container-1">
          <p className="form-text-question">City</p>
          <select title="city" className="search-input" required>
            <option value="hk">Hong Kong</option>
            <option value="sg">Singapore</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Building</p>
          <select title="building" className="search-input" required>
            <option value="hk">W Lux</option>
            <option value="sg">Jebsen</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Floor</p>
          <select title="floor" className="search-input" required>
            <option value="hk">3rd</option>
            <option value="sg">5th</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Area</p>
          <select title="area" className="search-input" required>
            <option value="hk">Kitchen</option>
            <option value="sg">Office</option>
          </select>
        </div>
        <div className="form-part-container-1">
          <p className="form-text-question">Data Type</p>
          <select title="area" className="search-input" id="dataType" required>
            <option value="hk">Occupancy</option>
            <option value="sg">Air Quality</option>
            <option value="sg">Bookings</option>
          </select>
        </div>
      </div>
      <div className="form-questions-container">
        <div className="form-part-container-1">
          <p className="form-text-question">Date Range</p>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={(event) => onChange(event)}
          />
        </div>
      </div>
      <div className="search-bar-button-group">
        <button
          onClick={(event) => {
            fullScreenRedirect(event, "Hall A");
          }}
          type="button"
          className="btn btn-secondary form-search-button"
        >
          Full Screen
        </button>
        <button className="btn btn-primary form-search-button search-bar-button-2">
          Generate
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
