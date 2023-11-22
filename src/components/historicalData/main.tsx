import NavBar from "../../common/navbar";
import SearchBar from "../historicalData/searchBar";
import Table from "./table";
import { useState } from "react";

function HistoricalData() {
  let [data, setData] = useState("");

  return (
    <div>
      <NavBar pageName="Historical Data" />
      <SearchBar setData={setData}/>
      <Table />
    </div>
  );
}

export default HistoricalData;
