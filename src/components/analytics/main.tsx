import NavBar from "../../common/navbar";
import SearchBar from "./searchBar";
import AverageMetrics from "./averageMetrics";
import Charts from "./charts";
function Analytics() {
    
  return (
    <div>
      <NavBar pageName="Analytics" />
      <SearchBar />
      <AverageMetrics />
      <Charts />
    </div>
  );
}

export default Analytics;
