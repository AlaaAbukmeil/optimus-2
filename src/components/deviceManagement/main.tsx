import NavBar from "../../common/navbar";
import SearchBar from "./searchBar";
import Devices from "./devices";
function DeviceManagement() {
  return (
    <div>
      <NavBar pageName="Device Management" />
      <SearchBar />
      <Devices />
    </div>
  );
}

export default DeviceManagement;
