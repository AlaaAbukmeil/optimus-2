import Box1 from "./box1";
import Box2 from "./box2";
import Box3 from "./box3";
import Box4 from "./box4";

function DashboardFullScreen(area: any) {
    function redirectDashboard(event: any){
        window.location.href = "/dashboard"
      }
  return (
    <div onClick={(event) => {redirectDashboard(event)}} className="full-screen-container">
      <div className="boxes-container-1 boxes-container-1-full-screen">
        <Box1 />
        <Box2 />
      </div>
      <div className="boxes-container-2 boxes-container-2-full-screen">
        <Box3 />
        <Box4 mode="agenda"/>
      </div>
    </div>
  );
}

export default DashboardFullScreen;
