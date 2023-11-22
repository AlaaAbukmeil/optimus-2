import AverageMetrics from "./averageMetrics";
import ChartsMini from "./chartsMini";
import { useLocation } from "react-router-dom";
function AnalyticsFullScreen() {
  function redirectAnalytics(event: any) {
    window.location.href = "/analytics";
  }
  let query = new URLSearchParams(useLocation().search);
  let area = query.get("area");
  return (
    <div
      onClick={(event) => {
        redirectAnalytics(event);
      }}
      className="full-screen-container"
    >
      <h1 className="full-screen-area">{area}</h1>
      <div className="boxes-container-1 boxes-container-1-full-screen">
        <AverageMetrics />
      </div>
      <div className="boxes-container-2 boxes-container-2-full-screen">
        <ChartsMini />
      </div>
    </div>
  );
}

export default AnalyticsFullScreen;
