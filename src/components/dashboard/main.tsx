import NavBar from "../../common/navbar";
import Welcome from "./welcome-container";
import Box1 from "./box1";
import Box2 from "./box2";
import Box3 from "./box3";
import Box4 from "./box4";
import SearchBar from "./searchBar";
function Dashboard() {
  return (
    <div>
      <NavBar pageName="Dashboard" />
      <Welcome />
      <SearchBar />
      <div className="boxes-container-1">
        <Box1 />
        <Box2 />
      </div>
      <div className="boxes-container-2">
        <Box3 />
        <Box4 mode="week" />
      </div>
    </div>
  );
}

export default Dashboard;
