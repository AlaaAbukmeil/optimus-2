import axios from "axios";
import { handleAuth, postRequestOptions, baseUrl } from "../../../common/cookie";
import { FileUploader } from "react-drag-drop-files";
import { CloseIcon } from "../../../common/multi-use";
function AddDevice(props: any) {
  function downloadTemplate() {
    let url = "https://storage.googleapis.com/optimus-v2-api.appspot.com/templates/device_template.xlsx";
    window.open(url);
  }
  const handleChange = (file: any) => {
    props.setFile(file);
  };
  async function handleBulkUploadSubmit(event: any) {
    event.preventDefault();
    props.setRequestStatus(true);

    // handle file processing here

    try {
      props.setError(null);
      let url = baseUrl + "bulk-upload-device";
      let action: any = await axios.post(url, props.file, postRequestOptions);
      handleAuth(action.status);
      if (action.data.error) {
        props.setError(action.data.error);

        props.setRequestStatus(false);
      } else {
        props.setRequestStatus(false);
        props.setFile(null);
        props.setAddDevice(false);
        props.setRequestCardDisplay("block");
        props.setRequestCardMessage("Successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      props.setRequestStatus(false);
    }
  }
  async function handleSingleUploadSubmit(event: any) {
    event.preventDefault();
    props.setRequestStatus(true);

    try {
      props.setError(null);
      let url = baseUrl + "single-upload-device";
      let formData = new FormData(event.target);
      let action: any = await axios.post(url, formData, postRequestOptions);
      handleAuth(action.status);
      if (action.data.error) {
        props.setError(action.data.error);
        props.setRequestStatus(false);
      } else {
        props.setRequestStatus(false);
        props.setFile(null);
        props.setAddDevice(false);
        props.setRequestCardDisplay("block");
        props.setRequestCardMessage("Successful!");
      }
    } catch (error) {
      console.error("Error:", error);
      props.setRequestStatus(false);
    }
  }
  return (
    <div
      className="add-device-container add-device-container-2"
      style={{
        overflowY: "auto",
      }}
    >
      <div onClick={(event: any) => props.setAddDevice(false) & props.setError("")}>
        <CloseIcon />
      </div>
      <form
        onSubmit={(event) => handleSingleUploadSubmit(event)}
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
                    <input type="text" name={props.tableTitlesDictionary[title]} placeholder="No special characters" required className="input-param"></input>
                  ) : (
                    <select className="select-device-type input-param" name={props.tableTitlesDictionary[title]}>
                      <option>IAQ</option>
                      <option>Occupancy</option>
                    </select>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div className="position-info-edit-container">
          <button type="submit" className="btn btn-primary form-search-button add-device-btn">
            {" "}
            Add
          </button>
        </div>
      </form>

      <hr />
      <div className="search-bar-button-group device-management-buttons  device-management-buttons-1">
        <form className="form-add-device" onSubmit={(event) => handleBulkUploadSubmit(event)}>
          <h4>Bulk upload a csv/xlsx file with devices info</h4>
          {/* <input type="file" className="upload-file-input"  handleChange={handleChange}/> */}
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={["xlsx", "csv"]}
            // required
          />
          <p>{props.file ? `File name: ${props.file[0].name}` : "no files uploaded yet"}</p>
          <h4 className="error">{props.error}</h4>
          <div className="search-bar-button-group device-management-buttons device-management-buttons-2">
            <button type="button" className="btn btn-secondary form-search-button add-device-btn-1" onClick={(event) => downloadTemplate()}>
              Download template
            </button>
            <button className="btn btn-primary form-search-button search-bar-button-2" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDevice;
