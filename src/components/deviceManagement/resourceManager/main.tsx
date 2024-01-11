import { useState, useEffect, useCallback, useRef } from "react";
import { baseUrl, getRequestOptions, handleAuth, postRequestOptions } from "../../../common/cookie";
import Loader from "../../../common/loader";
import * as XLSX from "xlsx";
import RequestStatus from "../../../common/requestStatus";
import ContextMenu from "./contextMenu";
import EditLocation from "./editLocation";
import DeleteLocation from "./deleteLocation";
import AddLocation from "./addLocation";

import { DraggableComponent, DroppableElement, DroppableRow } from "../../../common/multi-use";
import axios from "axios";

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
  let [devices, setDevices] = useState([]);
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
  let [unassignedExpanded, setUnassignedExpanded] = useState(false);
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
        setData(data.structure);
        setDevices(data.devices);
        for (let index = 0; index < data.structure.length; index++) {
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

  const handleDrop = async (draggedId: any, dropTargetId: any) => {
    // Handle the drop logic, for example, reordering the rows

    let param = { deviceId: draggedId, locationId: dropTargetId };
    let url = baseUrl;
    if (dropTargetId != "unassign") {
      url += "assign-device";
    } else {
      url += "unassign-device";
    }
    let action = await axios.post(url, param, postRequestOptions);
    handleAuth(action.status);
    window.location.reload();
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
      <DroppableElement rowId={"unassign"} onDrop={handleDrop} handleExpandRow={handleExpandRow}>
        <div className="unassigned-container">
          <div>
            <p className="title-unassigned">Unassigned Devices</p>
          </div>
          <div className="arrow fadeIn" style={{ display: unassignedExpanded == false ? "block" : "none" }} onClick={(event) => setUnassignedExpanded(true)}>
            {/* //down */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="arrow fadeIn" style={{ display: unassignedExpanded == true ? "block" : "none" }} onClick={(event) => setUnassignedExpanded(false)}>
            {/* up */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F"></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        <div className="unassigned-devices fadeIn" style={{ display: unassignedExpanded == false ? "block" : "none" }}>
          <td>
            {devices
              .filter((device: any, index: any) => !device["locationId"])
              .map((device: any, index) => (
                <DraggableComponent id={device["_id"]}>
                  {device.name} ({device.type})
                </DraggableComponent>
              ))}
          </td>
        </div>
      </DroppableElement>
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
                <>
                  <DroppableRow key={index} rowId={location["_id"]} onDrop={handleDrop} onContextMenu={(event: any) => handleContextMenu(event, location)} index={index} handleExpandRow={handleExpandRow}>
                    {tableTitles.map((title: string, index: number) => (
                      <td>{location[tableTitlesDictionary[title]] ? location[tableTitlesDictionary[title]].toString() : ""}</td>
                    ))}
                  </DroppableRow>

                  <div className="fadeIn" style={{ display: expandedIndex[index] != 0 ? "block" : "none" }}>
                    {devices
                      .filter((device: any, index: any) => device["locationId"] == location["_id"])
                      .map((device: any, index: any) => (
                        <td>
                          <DraggableComponent id={device["_id"]}>
                            {device.name} ({device.type})
                          </DraggableComponent>
                        </td>
                      ))}
                  </div>
                </>
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
