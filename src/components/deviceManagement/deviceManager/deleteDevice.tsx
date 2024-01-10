import axios from "axios";
import { handleAuth, baseUrl, postRequestOptions } from "../../../common/cookie";
import { CloseIcon } from "../../../common/multi-use";
function DeleteDevice(props: any) {
  async function handleDeleteDevice(event: any) {
    event.preventDefault();
    props.setRequestStatus(true);

    try {
      props.setError(null);
      let url = baseUrl + "delete-device";
      let formData = new FormData(event.target);
      let action: any = await axios.post(url, formData, postRequestOptions);
      handleAuth(action.status);

      if (action.data.error) {
        props.setError(action.data.error);
        props.setRequestStatus(false);
      } else {
        props.setRequestStatus(false);
        props.setDeleteDeviceDisplay(false);
        props.setDeleteDeviceInfo({});
        props.setRequestCardDisplay("block");
        props.setRequestCardMessage("Successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      props.setRequestStatus(false);
    }
  }
  return (
    <div className="device-info-container-1">
      <div
        className="add-device-container add-device-container-2 delete-location-container"
        style={{
          overflowY: "auto",
        }}
      >
        <div onClick={(event: any) => props.setDeleteDeviceDisplay(false) & props.setError("")}>
          <CloseIcon />
        </div>
        <form
          id="delete-location"
          onSubmit={(event) => handleDeleteDevice(event)}
          style={{
            overflowX: "auto",
          }}
          className="table-responsive table-add-devices-form"
        >
          <table
            id="table-id"
            style={{
              border: "1px solid black",
            }}
            className="table table-hover table-add-devices"
          >
            <tbody>
              <tr className="table-header">
                {props.tableTitlesDevice.map((title: string, index: number) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>

              <tr>
                {props.tableTitlesDevice.map((title: string, index: number) => (
                  <td key={index}>
                    {title != "Type" ? (
                      title != "Booking_enabled" ? (
                        title == "_id" ? (
                          <input type="text" value={props.data[props.tableTitleAddDeviceExpectedNames[title]]} name={props.tableTitleAddDeviceExpectedNames[title]} className="paramDisabled input-param"></input>
                        ) : (
                          <input type="text" value={props.data[props.tableTitleAddDeviceExpectedNames[title]]} placeholder={props.data[props.tableTitleAddDeviceExpectedNames[title]]} name={props.tableTitleAddDeviceExpectedNames[title]} className="paramDisabled input-param"></input>
                        )
                      ) : (
                        <select className="select-device-type input-param paramDisabled" name={props.tableTitleAddDeviceExpectedNames[title]} value={props.data[props.tableTitleAddDeviceExpectedNames[title]]}>
                          <option>{props.tableTitleAddDeviceExpectedNames[title].toLowerCase() == "true" ? "True" : "False"}</option>
                          <option>{props.tableTitleAddDeviceExpectedNames[title].toLowerCase() == "false" ? "False" : "True"}</option>
                        </select>
                      )
                    ) : (
                      <select className="select-device-type input-param paramDisabled" name={props.tableTitleAddDeviceExpectedNames[title]} value={props.data[props.tableTitleAddDeviceExpectedNames[title]]}>
                         <option>{props.tableTitleAddDeviceExpectedNames[title].toLowerCase() == "occupancy" ? "occupancy" : "iaq"}</option>
                        <option>{props.tableTitleAddDeviceExpectedNames[title].toLowerCase() == "iaq" ? "iaq" : "occupancy"}</option>
                      </select>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="delete-location-text">Warning: Deletion is final and irreversible.</p>
          <div className="position-info-edit-container">
            <button type="submit" className="btn btn-danger form-search-button add-device-btn">
              {" "}
              Delete
            </button>
          </div>
        </form>
        <h4 className="error">{props.error}</h4>
      </div>
    </div>
  );
}

export default DeleteDevice;
