import { useState } from "react";
import NavBar from "../../common/navbar";
import ResourceManager from "./resourceManager/main";
import DeviceManager from "./deviceManager/main";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function DeviceManagement() {
  let [toggle, setToggle] = useState(localStorage.getItem("deviceToggle") || 1);

  function changeToggle(event: any, value: number) {
    localStorage.setItem("deviceToggle", value.toString());
    setToggle(value);
  }

  return (
      <DndProvider backend={HTML5Backend}>
    <div>
      <NavBar pageName="Device Management" />
      <div className="search-bar-button-group device-management-buttons">
        <button type="button" className="btn btn-secondary form-search-button" onClick={(event) => changeToggle(event, 1)}>
          Device Manager
        </button>
        <button className="btn btn-primary form-search-button search-bar-button-2" onClick={(event) => changeToggle(event, 2)}>
          Resource Manager
        </button>
      </div>

      {toggle == 1 ? <DeviceManager /> : <ResourceManager />}
    </div>
    </DndProvider>
  );
}

export default DeviceManagement;
