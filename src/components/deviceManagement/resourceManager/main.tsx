import { useState, useEffect, useCallback, useRef } from "react";
import { baseUrl, getRequestOptions, handleAuth } from "../../../common/cookie";
import Loader from "../../../common/loader";
import * as XLSX from "xlsx";
import RequestStatus from "../../../common/requestStatus";
import ContextMenu from "./contextMenu";
import EditLocation from "./editLocation";
import DeleteLocation from "./deleteLocation";
import AddLocation from "./addLocation";

import { DraggableComponent, DroppableElement } from "../../../common/multi-use";

function ResourceManager() {
  let tableTitlesDictionary: any = {
    City: "cityId",
    Building: "buildingId",
    Floor: "floorId",
    Area: "areaId",
    Type: "type",
    "Booking Enabled": "booking_enabled",
    _id: "_id",
  };
  let tableTitles = Object.keys(tableTitlesDictionary);

  let tableTitlesAddLocation = ["City", "Building", "Floor", "Area", "Type", "Booking Enabled"];

  let [data, setData] = useState([]);
  let [addLocation, setAddLocation] = useState(false);
  const [request, setRequestStatus] = useState(false);
  let [error, setError] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  let [requestCardDisplay, setRequestCardDisplay] = useState("none");
  let [requestCardMessage, setRequestCardMessage] = useState("");
  let [editLocationDisplay, setEditLocationDisplay] = useState(false);
  let [editLocationInfo, setEditLocationInfo] = useState({});
  let [deleteLocationDisplay, setDeleteLocationDisplay] = useState(false);
  let [deleteLocationInfo, setDeleteLocationInfo] = useState({});
  let [expandedIndex, setExpandedIndex] = useState<any>({});
  function downloadCSV() {
    let table = document.getElementById("table-id");

    // Use XLSX.utils.table_to_book to convert the table to a workbook
    let wb = XLSX.utils.table_to_book(table, { sheet: "Sheet 1" });

    // Write the workbook to a file
    XLSX.writeFile(wb, `resources_management.xlsx`);
  }
  let url = baseUrl + "resources";
  useEffect(() => {
    setRequestStatus(true);
    fetch(url, getRequestOptions)
      .then((res) => {
        handleAuth(res.status);
        return res.json();
      })
      .then((data) => {
        setData(data);
        for (let index = 0; index < data.length; index++) {
          expandedIndex[index] = 0;
          setExpandedIndex(expandedIndex);
        }
        setRequestStatus(false);
      });
    setRequestStatus(false);
  }, []);

  const [contextMenuState, setContextMenuState] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: {},
  });
  const contextMenuRef: any = useRef(null);

  const handleContextMenu = useCallback((event: any, location: any) => {
    event.preventDefault();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate the position of the context menu accounting for the scroll
    const x = event.clientX + scrollX;
    const y = event.clientY + scrollY;

    setContextMenuState({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      data: location,
    });
  }, []);

  const hideMenue = useCallback((event: any) => {
    // Hide context menu if clicking outside
    if (contextMenuRef.current && contextMenuRef.current.contains(event.target)) {
      setContextMenuState({ visible: false, x: 0, y: 0, data: {} });
    }
  }, []);

  const handleDrop = (draggedId: any, dropTargetId: any) => {
    // Handle the drop logic, for example, reordering the rows
    console.log("test");
  };

  function handleExpandRow(event: any, index: number) {
    if (expandedIndex[index] == 1) {
      expandedIndex[index] = 0;
    } else {
      expandedIndex[index] = 1;
    }
    setExpandedIndex(expandedIndex);
  }
  if (request) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div onClick={hideMenue} ref={contextMenuRef}>
      <DraggableComponent id="test">TEST </DraggableComponent>

      <div className="table-responsive">
        <table className="table table-hover table-device-structure" id="table-id">
          <tbody>
            <tr>
              {tableTitles.map((title: string, index: any) => (
                <th key={index}>{title}</th>
              ))}
            </tr>

            {data.length > 0 ? (
              data.map((location: any, index: any) => (
                <DroppableElement key={index} rowId={index} onDrop={handleDrop} onContextMenu={(event: any) => handleContextMenu(event, location)} index={index} handleExpandRow={handleExpandRow}>
                  <tr>
                    {tableTitles.map((title: string, index: number) => (
                      <td>
                        <DraggableComponent id={location["_id"]}>{location[tableTitlesDictionary[title]] ? location[tableTitlesDictionary[title]].toString() : ""}</DraggableComponent>
                      </td>
                    ))}
                  </tr>
                 
                    <div className="fadeIn" style={{ display: expandedIndex[index] != 0 ? "block" : "none" }}>
                      <p>device</p>
                    </div>
                  
                </DroppableElement>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>

        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="add-device-svg" onClick={(event) => setAddLocation(true)}>
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#1C274C"></path>{" "}
          </g>
        </svg>
      </div>
      <div className="search-bar-button-group device-management-buttons">
        <button className="btn btn-secondary form-search-button download-csv-btn" onClick={(event) => downloadCSV()}>
          Download Report
        </button>
      </div>
      <RequestStatus display={requestCardDisplay} message={requestCardMessage} />
      <ContextMenu contextMenuState={contextMenuState} setEditLocationDisplay={setEditLocationDisplay} setEditLocationInfo={setEditLocationInfo} setDeleteLocationDisplay={setDeleteLocationDisplay} setDeleteLocationInfo={setDeleteLocationInfo} />
      {editLocationDisplay && <EditLocation data={editLocationInfo} setRequestStatus={setRequestStatus} setError={setError} setEditLocationInfo={setEditLocationInfo} setEditLocationDisplay={setEditLocationDisplay} setRequestCardDisplay={setRequestCardDisplay} setRequestCardMessage={setRequestCardMessage} tableTitles={tableTitles} tableTitleExpectedNames={tableTitlesDictionary} error={error} />}
      {deleteLocationDisplay && <DeleteLocation data={deleteLocationInfo} setRequestStatus={setRequestStatus} setError={setError} setDeleteLocationDisplay={setDeleteLocationDisplay} setDeleteLocationInfo={setDeleteLocationInfo} setRequestCardDisplay={setRequestCardDisplay} setRequestCardMessage={setRequestCardMessage} tableTitles={tableTitles} tableTitleExpectedNames={tableTitlesDictionary} error={error} />}
      {addLocation && (
        <div className="device-info-container-1">
          <AddLocation setRequestStatus={setRequestStatus} setError={setError} setRequestCardDisplay={setRequestCardDisplay} setRequestCardMessage={setRequestCardMessage} tableTitlesDictionary={tableTitlesDictionary} tableTitlesAddLocation={tableTitlesAddLocation} error={error} setAddLocation={setAddLocation} setFile={setFile} file={file} />
        </div>
      )}
    </div>
  );
}

export default ResourceManager;
